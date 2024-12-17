// 侧边栏

import { generateSidebar } from 'vitepress-sidebar'

const globalOptions = {
  documentRootPath: 'src',
  collapsed: true,
  collapseDepth: 2,
  underscoreToSpace: true,

  // 显示 index.md
  includeFolderIndexFile: true,

  // 标题所有单词首字母大写
  capitalizeEachWords: true,

  // ! 根据文件Frontmatter中title的值显示标题 (须同时开启)
  useTitleFromFrontmatter: true,
  // ! 根据文件中指定的Frontmatter中的键名显示菜单标题 (须同时开启)
  frontmatterTitleFieldName: 'name',

  // 按名称对菜单项中的项目进行排序, 默认 false 是升序
  sortMenusByName: true,
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
    scanStartPath: '哲思_人文_社科',
    resolvePath: '/哲思_人文_社科/',
    excludePattern: ['遗愿清单.md'],
  },
  {
    scanStartPath: '护肤',
    resolvePath: '/护肤/',
  },
  {
    scanStartPath: '自然科学',
    resolvePath: '/自然科学/',
  },
  {
    scanStartPath: 'lyrics',
    resolvePath: '/lyrics/',
  },
]

const mergedSideBars = sideBars.map(sidebar => ({
  ...globalOptions,
  ...sidebar
}))

export const sideBar = generateSidebar(mergedSideBars)