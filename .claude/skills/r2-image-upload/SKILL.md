---
name: r2-image-upload
description: >
  通用 Cloudflare R2 图片上传工具。当用户提供图片（本地文件路径、PixPin 截图路径、或网络图片 URL）时，
  自动上传到项目的 Cloudflare R2 存储桶并返回 R2 公开 URL 和 markdown 图片标签。
  适用于本项目的所有图片上传需求：穿搭衣物照、博客配图、截图等任何需要上传图片的场景。
  注意：本 skill 只负责上传和生成 URL，不负责写入内容文件。
---

# R2 图片上传

将任意图片上传到本项目的 Cloudflare R2 存储桶，返回可直接引用的公开 URL。

## 前置条件

### 凭证文件

确保 `.claude/r2-credentials.json` 存在（项目根目录下的 `.claude/` 文件夹中）。
如果不存在，从用户处获取 R2 凭证信息后创建该文件，内容格式：

```json
{
  "accountId": "1a3eb058db7ba235e1bb512aab0550da",
  "accessKey": "xxx",
  "secretKey": "xxx",
  "bucket": "jason-jottings-images",
  "publicDomain": "pub-dcb07a5e74a14d9aa904f344ccba75f5.r2.dev"
}
```

> ⚠️ 该文件已加入 `.gitignore`，不会提交到 git。

### 脚本依赖

上传脚本位置：`.claude/skills/r2-image-upload/scripts/upload-to-r2.js`
依赖在首次使用时自动安装，无需手动操作。

## 输入格式

用户提供图片，以空格分隔，每项可以是：

| 类型 | 示例 |
|------|------|
| 本地文件路径 | `C:\Users\86150\AppData\Local\PixPin\Temp\PixPin_xxx.png` |
| 网络图片 URL | `https://cbu01.alicdn.com/img/ibank/xxx.jpg` |

## 处理流程

### 1. 收集图片信息

判断用户提供的每张图片：

- **本地路径**：确认文件存在
- **URL**：确认是可访问的图片链接
- **PixPin 截图**：路径通常在 `C:\Users\86150\AppData\Local\PixPin\Temp\` 下

### 2. 调用上传脚本

```bash
node .claude/skills/r2-image-upload/scripts/upload-to-r2.js <图片1> [<图片2> ...]
```

脚本会：
- 自动安装依赖（首次运行）
- 读取凭证文件
- 下载 URL 图片或读取本地文件
- 计算文件内容 MD5 哈希（前 8 位）
- 上传到 R2，文件名为 `{原文件名}_{hash8}.{ext}`
- 输出 tsv 格式结果：`R2_URL \t 文件名 \t 哈希值`

### 3. 输出结果

对每张上传成功的图片，向用户提供：

- **R2 公开 URL**：`https://pub-dcb07a5e74a14d9aa904f344ccba75f5.r2.dev/{文件名}`
- **Markdown 图片标签**（推荐）：`![描述](R2_URL)`

描述（alt text）的生成规则：
- 对于有明确上下文的图片（如衣物尺码表、平铺图），使用 `![商品名 图片类型]`
- 对于通用图片，用简短中文描述图片内容
- 不要留空，也不要用无意义的文件名

## 注意事项

### 文件命名

脚本自动生成 `{原文件名}_{hash8}.{ext}` 格式：
- 相同内容的图片重复上传 → 哈希一致 → 文件名相同 → 自动覆盖，无冗余
- 不同内容的图片即使同名 → 哈希不同 → 不会冲突

### 上传失败处理

- 网络 URL 下载失败 → 检查 URL 是否可访问，尝试用浏览器打开验证
- 上传失败 → 检查凭证文件是否正确，网络是否连通
- 返回 `FAILED` 行的图片需要重新处理

### 性能

- 脚本支持一次传入多个图片路径/URL
- 目前是串行上传（避免并发超限）
- 图片较大的话上传会稍慢，等待即可

### 凭证安全

- 绝对不要将 `.claude/r2-credentials.json` 的内容硬编码到任何其他文件或输出中
- 不要将凭证提交到 git（已在 `.gitignore` 中排除）
- 如果凭证泄露，在 Cloudflare Dashboard 中吊销并重新生成