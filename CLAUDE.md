# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

VitePress 1.x 构建的个人知识库博客网站，源码在 `src/` 目录，以 Markdown 文件组织内容。

- **在线地址**: https://jason-jottings.netlify.app/
- **包管理**: pnpm（锁文件 `pnpm-lock.yaml`）
- **部署**: 推送到 `main` 分支后 Netlify 自动部署

## 常用命令

```bash
pnpm docs:dev      # 启动开发服务器 http://localhost:5173
pnpm docs:build    # 构建生产版本到 .vitepress/dist
pnpm docs:preview  # 预览生产构建
pnpm start         # 运行爬虫脚本 (test/crawler-config.js)
```

项目没有配置 linter、formatter 或 test runner。

## 内容管理

所有 Markdown 内容在 `src/` 目录下，按分类放在子目录中。添加新 `.md` 文件到对应目录即可自动出现在侧边栏（由 `vitepress-sidebar` 驱动）。

### 内容约定

- 文件按数字前缀排序（如 `1.intro.md`），侧边栏自动按数字排序
- Frontmatter `title` 控制页面标题，`fileTitle` 控制侧边栏菜单标题
- 设置 `exclude: true` 可从侧边栏隐藏该页面
- 文件名中的下划线在侧边栏中自动转为空格
- 侧边栏支持 `collapseDepth: 1`，可折叠组

### 搜索

Algolia DocSearch（主）和本地搜索（备选），在 `.vitepress/configs/search.js` 中配置。

## 配置架构

配置集中在 `.vitepress/`，按模块拆分：

| 文件 | 用途 |
|------|------|
| `config.mjs` | 主配置入口 |
| `configs/nav.js` | 导航栏 |
| `configs/sideBar.js` | 自动侧边栏（7 个扫描根目录） |
| `configs/search.js` | Algolia + 本地搜索 |
| `configs/htmlOptions.js` | HTML 元信息、分析脚本 |
| `configs/socialLinks.js` | 社交链接图标 |
| `theme/index.js` | 主题入口（扩展 DefaultTheme，注册 medium-zoom） |
| `theme/components/MyLayout.vue` | 深色模式圆形裁剪过渡动画 |
| `theme/style/` | 9 个 CSS 模块：毛玻璃效果、彩虹动画、自定义区块图标、平台链接图标等 |

## 内容目录

| 目录 | 内容 |
|------|------|
| `src/Philosophy/` | 哲思·文学·社科 |
| `src/Skin_Care/` | 护肤 |
| `src/Natural_Sciences/` | 自然科学 |
| `src/beatbox/` | Beatbox |
| `src/Fashion/` | 穿搭 |
| `src/tim_english/` | Tim 英语 |
| `src/CS/` | 计算机科学 |
| `src/Harry_Potter/` | 哈利波特 |
| `src/clipboard/` | 剪贴板 |
| `src/todo/` | 待办 |
| `src/public/` | 静态资源（图标、SVG） |