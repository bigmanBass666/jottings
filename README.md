# Jottings - 个人知识库

> 电子垃圾桶，杂货间，剪贴板 —— 随手记下，想到什么写什么

## 项目简介

Jottings 是一个基于 **VitePress** 构建的个人知识库与博客网站，收录了博主在各个领域的学习笔记、思考积累和知识整理。网站名称取自"杂记"，寓意这是一个随心所欲、涵盖多元内容的个人知识空间。

**在线访问**: [jason-jottings.netlify.app](https://jason-jottings.netlify.app/)

## 核心技术栈

| 技术 | 说明 |
|------|------|
| **VitePress** | Vue 驱动的静态网站生成器，快速、简洁、高效 |
| **vitepress-sidebar** | 自动生成侧边栏导航 |
| **medium-zoom** | 图片放大预览插件 |
| **markdown-it-mathjax3** | 数学公式渲染支持 |
| **Algolia Search** | 全文搜索服务 |

## 内容分类

网站内容涵盖以下主要领域：

### 1. 哲思·文学·社科
- 博主随笔
- 读书笔记
- 积累本
- 箴言集锦
- 其他思考

### 2. 护肤
- 痤疮护理知识
- 洗发水评测
- 护肤杂项

### 3. 自然科学
- 物理学知识（如主动降噪原理）
- 营养学知识

### 4. Beatbox
- 各种 Beatbox 技巧与教学
- 音乐节奏练习

### 5. 穿搭
- 服装面料知识
- 时尚搭配

### 6. 学习
- Tim 英语学习笔记
- 计算机技术学习笔记

## 目录结构

```
jottings_website/
├── .vitepress/                     # VitePress 配置目录
│   ├── config.mjs                  # 主配置文件
│   ├── configs/                    # 配置模块
│   │   ├── htmlOptions.js         # HTML 选项配置
│   │   ├── index.js               # 索引配置
│   │   ├── nav.js                 # 导航栏配置
│   │   ├── search.js              # 搜索配置
│   │   ├── sideBar.js             # 侧边栏配置
│   │   └── socialLinks.js         # 社交链接配置
│   ├── cache/                      # 构建缓存
│   └── dist/                       # 构建输出目录
├── src/                            # 文档源文件目录
│   ├── index.md                    # 首页配置
│   ├── beatbox/                    # Beatbox 内容
│   ├── catalog/                    # 目录
│   ├── clipboard/                   # 剪贴板内容
│   ├── CS/                         # 计算机科学
│   ├── Fashion/                    # 穿搭时尚
│   ├── Harry_Potter/               # 哈利波特相关
│   ├── Natural_Sciences/            # 自然科学
│   ├── Philosophy/                  # 哲学文学社科
│   ├── public/                     # 公共资源
│   ├── Skin_Care/                  # 护肤知识
│   ├── tim_english/                # Tim 英语
│   └── todo/                       # 待办事项
├── package.json
└── .gitignore
```

## 快速开始

### 环境要求

- Node.js >= 18
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发预览

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看开发服务器。

### 构建生产版本

```bash
npm run docs:build
```

构建产物输出到 `.vitepress/dist` 目录。

### 预览生产构建

```bash
npm run docs:preview
```

## 部署说明

### 自动部署

本项目配置了 GitHub Actions 或类似的 CI/CD 流程，代码推送到 `main` 分支后会自动构建并部署到 Netlify。

### 手动部署

1. 执行 `npm run docs:build` 构建项目
2. 将 `.vitepress/dist` 目录下的所有文件部署到你的静态托管服务
3. 推荐的托管平台：
   - **Netlify** - 演示站点使用的平台
   - **Vercel** - 另一个优秀的静态网站托管平台
   - **GitHub Pages** - 免费且集成度高

### 站点地图配置

在 `.vitepress/config.mjs` 中配置了站点地图：

```javascript
sitemap: {
  hostname: 'https://jason-jottings.netlify.app/',
}
```

如需自定义，请修改对应配置。

## 编辑链接

每个页面都配置了"编辑此页"链接，指向 Gitee 仓库：

```javascript
editLink: {
  pattern: 'https://gitee.com/bigmanBass666/jottings/edit/main/src/:path',
}
```

## 搜索功能

本项目使用 Algolia DocSearch 提供全文搜索服务。在 `.vitepress/configs/search.js` 中配置搜索选项。

## 特色功能

- **深浅模式切换**: 支持亮色/暗色主题切换
- **返回顶部**: 快速回到页面顶部
- **文章目录**: 右侧显示文章大纲（2-6 级标题）
- **图片懒加载**: 自动启用图片懒加载提升性能
- **数学公式**: 支持 LaTeX 数学公式渲染
- **最后更新时间**: 显示每篇文章的最后更新时间

## 开发笔记

### Crawler 工具

项目包含一个基于 Crawlee (Playwright) 的爬虫配置：

```bash
npm start
```

这将启动爬虫配置工具，用于数据采集任务。

### VitePress 配置

VitePress 的详细配置请参考 [.vitepress/config.mjs](.vitepress/config.mjs)，配置包含：

- 站点元数据
- 导航栏菜单
- 侧边栏生成规则
- 社交链接
- 页脚信息
- Markdown 渲染选项

## 致谢

> "我只身前行，却仿佛带着一万雄兵"

感谢所有访问这个知识库的朋友，愿这些笔记能对你有所启发。

---

**作者**: Jason Liu

**技术栈**: VitePress + Vue 3 + Vite
