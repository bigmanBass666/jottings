/**
 * upload-to-r2.js — Upload images to Cloudflare R2
 *
 * Usage:
 *   node upload-to-r2.js <path|url> [<path|url> ...]
 *
 * Each argument is either a local file path or an HTTP(S) URL.
 * The script outputs one line per image with: URL<TAB>markdown_tag
 *
 * Credentials are read from ../r2-credentials.json (relative to this script).
 *
 * Filename convention: {stem}_{contentHash8}.{ext}
 *   - Local files: stem = original filename (without ext)
 *   - URLs: stem = last path segment (decoded, without ext)
 *
 * Examples:
 *   node upload-to-r2.js ./screenshot.png
 *   node upload-to-r2.js https://example.com/photo.jpg
 *   node upload-to-r2.js ./a.png https://example.com/b.jpg "C:\Users\me\c.png"
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ── Bootstrap: ensure @aws-sdk/client-s3 is available ──────────────────
const SCRIPT_DIR = __dirname;
const SKILL_DIR = path.resolve(SCRIPT_DIR, '..');

function resolveS3() {
  const searchPaths = [
    path.join(SCRIPT_DIR, 'node_modules'),
    path.join(SKILL_DIR, 'node_modules'),
    path.resolve(SKILL_DIR, '..', '..', 'node_modules'), // project root
  ];
  for (const p of searchPaths) {
    try {
      return require(path.join(p, '@aws-sdk', 'client-s3'));
    } catch { /* try next */ }
  }
  return null;
}

let S3 = resolveS3();
if (!S3) {
  console.error('Installing @aws-sdk/client-s3 (one-time setup)...');
  const { execSync } = require('child_process');
  execSync('npm install @aws-sdk/client-s3 --no-audit --no-fund', {
    cwd: SCRIPT_DIR, stdio: 'inherit',
  });
  S3 = resolveS3();
  if (!S3) {
    console.error('Failed to install @aws-sdk/client-s3. Try: npm install in ' + SCRIPT_DIR);
    process.exit(1);
  }
}

const { S3Client, PutObjectCommand } = S3;

// ── Read credentials ───────────────────────────────────────────────────
// Search order: skill dir → project .claude/ dir
const credCandidates = [
  path.join(SKILL_DIR, 'r2-credentials.json'),
  path.resolve(SKILL_DIR, '..', '..', 'r2-credentials.json'), // .claude/r2-credentials.json
];
let credPath;
for (const c of credCandidates) {
  if (fs.existsSync(c)) { credPath = c; break; }
}
if (!credPath) {
  console.error('Missing r2-credentials.json. Create one of:');
  credCandidates.forEach(c => console.error('  ' + c));
  console.error('Content: { "accountId": "...", "accessKey": "...", "secretKey": "...", "bucket": "...", "publicDomain": "..." }');
  process.exit(1);
}
const creds = JSON.parse(fs.readFileSync(credPath, 'utf8'));

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${creds.accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: creds.accessKey, secretAccessKey: creds.secretKey },
});

function contentType(ext) {
  const mime = {
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4', '.mov': 'video/quicktime',
  };
  return mime[ext.toLowerCase()] || 'application/octet-stream';
}

function contentHash(buffer) {
  return crypto.createHash('md5').update(buffer).digest('hex').slice(0, 8);
}

function stemFromUrl(url) {
  const urlPath = new URL(url).pathname.replace(/\/$/, '');
  const name = decodeURIComponent(urlPath.split('/').pop() || 'image');
  return name.replace(/\.[^.]+$/, '');
}

function stemFromPath(filePath) {
  const base = path.basename(filePath);
  return base.replace(/\.[^.]+$/, '');
}

async function uploadOne(input) {
  const isUrl = /^https?:\/\//i.test(input);
  let buffer, originalStem, ext;

  if (isUrl) {
    console.error(`Downloading: ${input}`);
    const resp = await fetch(input);
    if (!resp.ok) throw new Error(`Download failed (${resp.status}): ${input}`);
    buffer = Buffer.from(await resp.arrayBuffer());
    originalStem = stemFromUrl(input);
    // Determine ext from Content-Type or URL
    const ct = resp.headers.get('content-type') || '';
    ext = ct.includes('png') ? '.png'
      : ct.includes('jpeg') || ct.includes('jpg') ? '.jpg'
      : ct.includes('webp') ? '.webp'
      : ct.includes('gif') ? '.gif'
      : path.extname(new URL(input).pathname).toLowerCase() || '.jpg';
  } else {
    if (!fs.existsSync(input)) throw new Error(`File not found: ${input}`);
    buffer = fs.readFileSync(input);
    originalStem = stemFromPath(input);
    ext = path.extname(input).toLowerCase() || '.png';
  }

  const hash8 = contentHash(buffer);
  // Remove problematic characters from stem
  const cleanStem = originalStem.replace(/[^\w.-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  const key = `${cleanStem}_${hash8}${ext}`;

  await s3.send(new PutObjectCommand({
    Bucket: creds.bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType(ext),
  }));

  const url = `https://${creds.publicDomain}/${key}`;
  return { url, key, hash: hash8 };
}

async function main() {
  const inputs = process.argv.slice(2);
  if (inputs.length === 0) {
    console.error('Usage: node upload-to-r2.js <path|url> [<path|url> ...]');
    process.exit(1);
  }

  const results = [];
  for (const input of inputs) {
    try {
      const r = await uploadOne(input);
      results.push(r);
      console.error(`OK  ${r.key}`);
    } catch (err) {
      results.push(null);
      console.error(`FAIL ${input}: ${err.message}`);
    }
  }

  // ── Output: tab-separated, one per line ──
  // stdout = machine readable, stderr = human readable
  for (const r of results) {
    if (r) {
      console.log(`${r.url}\t${r.key}\t${r.hash}`);
    } else {
      console.log('FAILED\t\t');
    }
  }
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });