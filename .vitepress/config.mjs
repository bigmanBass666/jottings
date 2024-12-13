import { defineConfig } from 'vitepress'

// 站点元数据, 导航栏, 社交链接, 侧边栏代码
import { htmlOptions, search, nav, socialLinks, sideBar } from './configs'

export default defineConfig({
  ...htmlOptions,

  cleanUrls: true,
  srcDir: './src',
  lastUpdated: true,

  srcExclude: ['哲思_人文_社科/遗愿清单.md'],

  themeConfig: {
    // 左上角品牌
    logo: 'https://img.picgo.net/2024/12/08/melon_round06d334931cff05c9.png',
    siteTitle: '杂记',

    // 搜索
    search: search,

    // 导航栏
    nav: nav,

    // 社交链接 (右上角)
    socialLinks: socialLinks,

    footer: {
      message: '我只身前行 却仿佛带着一万雄兵',
      copyright: 'Copyright © 2024-present Jason Liu'
    },

    // 深浅模式文字修改
    darkModeSwitchLabel: '斗转星移 →',

    // 侧边栏
    sidebar: sideBar,
    //侧边栏文字更改(移动端)
    // sidebarMenuLabel: '目录',

    // 右侧大纲
    outline: {
      level: [2, 6], // 显示2-6级标题
      // level: 'deep', // 显示2-6级标题
      // label: '当前页大纲' // 文字显示
    },

    //返回顶部文字修改
    // returnToTopLabel: '飞上去',

    //自定义上下页名
    docFooter: {
      prev: '←',
      next: '→',
    },
  },

  // markdown配置
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },

  // 站点地图
  sitemap: {
    hostname: 'https://jason-jottings.netlify.app/',
  }
})
