# git note

## 删除 `.git` 目录

### 删除当前目录下的 `.git` 目录

#### powershell

   ```powershell
   Remove-Item -Path .git -Recurse -Force
   ```

#### Git Bash

```bash
rm -rf .git
```

### 删除任何子目录中的 `.git` 目录

#### powershell

   ```powershell
   Get-ChildItem -Recurse -Directory | Where-Object { $_.Name -eq ".git" } | Remove-Item -Recurse -Force
   ```

#### Git Bash

```bash
find . -type d -name ".git" -exec rm -rf {} +
```

## 忽略SSL证书验证

### 局部

```cmd
git config http.https://github.com/paeonia-lactiflora/zyzx-official-website-mobile.git.sslVerify false
```

这条命令告诉Git在访问指定的 GitHub 仓库时忽略 SSL 证书验证。请将 <https://github.com/paeonia-lactiflora/zyzx-official-website-mobile.git> 替换为你实际的仓库 URL。

### 全局

```cmd
git config --global http.sslVerify false
```
