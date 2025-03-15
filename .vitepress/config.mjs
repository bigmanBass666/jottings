// https://vitepress.dev/zh/guide/getting-started
import { defineConfig } from 'vitepress'

// 站点元数据, 导航栏, 社交链接, 侧边栏代码
import { htmlOptions, search, nav, socialLinks, sideBar } from './configs'


export default defineConfig({
  ...htmlOptions,

  cleanUrls: true,
  srcDir: './src',
  appearance: true,

  themeConfig: {
    // 左上角品牌
    logo: 'https://pic2.ziyuan.wang/user/bigmanBass666/2024/12/melon_round06d334931cff05c9_90967a56c0b4b.png',
    siteTitle: '杂记',

    // 搜索
    search: search,

    // 导航栏
    nav: nav,

    // 社交链接 (右上角)
    socialLinks: socialLinks,

    footer: {
      message: '我只身前行 却仿佛带着一万雄兵',
      // copyright: 'Copyright © 2024-present Jason Liu'
      copyright: '©️ Jason Liu'
    },

    // 深浅模式文字修改
    darkModeSwitchLabel: '斗转星移 →',
    // hover文字
    lightModeSwitchTitle: '黑夜给了我黑色的眼睛, 我却用它来寻找光明',
    darkModeSwitchTitle: '所谓万丈深渊, 下去, 也是前程万里',

    // 侧边栏
    sidebar: sideBar,
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    // 右侧大纲
    outline: {
      level: [2, 6], // 显示2-6级标题
      // level: 'deep', // 显示2-6级标题
      label: '本文章节' // 文字显示
    },

    //返回顶部文字修改
    returnToTopLabel: '上去',

    // 编辑链接
    editLink: {
      pattern: 'https://gitee.com/bigmanBass666/jottings/edit/main/src/:path'
    },

    // 最后更新时间
    lastUpdated: {
      text: 'Updated at',
    },

    //自定义上下页名
    docFooter: {
      prev: '←',
      next: '→',
    },
  },

  // 最后更新时间
  lastUpdated: true,

  // markdown配置
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    },
    math: true
  },

  // 站点地图
  sitemap: {
    hostname: 'https://jason-jottings.netlify.app/',
  }
})