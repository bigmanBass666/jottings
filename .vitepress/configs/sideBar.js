// 侧边栏

import { generateSidebar } from 'vitepress-sidebar'

const globalOptions = {
  documentRootPath: 'src',
  collapsed: true,
  collapseDepth: 1,
  underscoreToSpace: true,

  // 显示 index.md
  // includeFolderIndexFile: true,

  // 标题所有单词首字母大写
  capitalizeEachWords: true,

  // 如果值为 true，则显示带有 .md 文件中 h1 标题内容的标题。如果文件中不存在 h1 标题，则显示 Unknown。
  useTitleFromFileHeading: true,
  // ! 根据文件Frontmatter中title的值显示标题 (须同时开启)
  useTitleFromFrontmatter: true,
  // ! 根据文件中指定的Frontmatter中的键名显示菜单标题 (须同时开启)
  frontmatterTitleFieldName: 'fileTitle',
  // 如果该值为 true，则使用当前文件夹的 index.md 文件中的信息来获取菜单名称。
  // 如果不存在 index.md 文件，则使用文件夹名称。
  // 由于我们通常从 index.md 文件中获取 index 名称，
  // 因此建议同时使用 useTitleFromFileHeading 或 useTitleFromFrontmatter 选项，
  // 从该文件的 Markdown 标题或 Frontmatter 中获取标题。
  useFolderTitleFromIndexFile: true,
  

  // 按名称对菜单项中的项目进行排序, 默认 false 是升序
  // sortMenusByName: true,
  // 排序完成之后, 如果值为 top，则所有文件夹都放在文件上方, bottom则在下方
  // sortFolderTo: 'top',
  // ['1-a', '10-a', '2-a'] -> ['1-a', '2-a', '10-a']
  sortMenusOrderNumericallyFromTitle: true,

  // ! 从所有操作完成后显示的菜单项的每个菜单标题中删除特定的前缀 (须同时开启)
  removePrefixAfterOrdering: true,
  // ! 从提取的菜单文本中删除指定数量字符（至少一个）的第一部分, 默认为 '.' (须同时开启)
  prefixSeparator: '.',
}

const sideBars = [
  // 自动生成sidebar https://vitepress-sidebar.cdget.com/zhHans/guide/options#scanstartpath
  {
    scanStartPath: 'Philosophy',
    resolvePath: '/Philosophy/',
  },
  {
    scanStartPath: 'Skin_Care',
    resolvePath: '/Skin_Care/',
  },
  {
    scanStartPath: 'Natural_Sciences',
    resolvePath: '/Natural_Sciences/',
  },
  {
    scanStartPath: 'beatbox',
    resolvePath: '/beatbox/',
  },
  {
    scanStartPath: 'Fashion',
    resolvePath: '/Fashion/',
  },
  {
    scanStartPath: 'tim_english_study',
    resolvePath: '/tim_english_study/',
  },
]

const mergedSideBars = sideBars.map(sidebar => ({
  ...globalOptions,
  ...sidebar
}))

export const sideBar = generateSidebar(mergedSideBars)