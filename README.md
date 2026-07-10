# Jottings — 个人知识库

> 电子垃圾桶，杂货间，剪贴板 —— 随手记下，想到什么写什么

## 项目简介

Jottings 是一个基于 **VitePress** 构建的个人知识库与博客网站，收录了博主在各个领域的学习笔记、思考积累和知识整理。

**在线访问**: [jason-jottings.netlify.app](https://jason-jottings.netlify.app/)

## 核心技术栈

| 技术 | 说明 |
|------|------|
| **VitePress** | Vue 驱动的静态网站生成器 |
| **vitepress-sidebar** | 自动生成侧边栏导航 |
| **medium-zoom** | 图片放大预览 |
| **markdown-it-mathjax3** | 数学公式渲染 |
| **Algolia Search** | 全文搜索服务 |

## 内容分类

- **哲思·文学·社科** — 随笔、读书笔记、箴言集锦
- **护肤** — 痤疮护理、洗发水评测
- **自然科学** — 物理学、营养学
- **Beatbox** — 技巧与教学
- **穿搭** — 面料知识、时尚搭配
- **学习** — 英语、计算机技术

## 快速开始

### 环境要求

- Node.js >= 18

### 安装依赖

```bash
npm install
```

### 开发预览

```bash
npm run docs:dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run docs:build
```

## 部署

本项目配置自动部署，推送到 `main` 分支后自动构建并部署到 Netlify。

## 特色功能

- 深浅模式切换
- 返回顶部
- 文章目录
- 图片懒加载
- 数学公式支持
- 最后更新时间

## 作者

- **GitHub**: [bigmanBass666](https://github.com/bigmanBass666)

---

> "我只身前行，却仿佛带着一万雄兵"
