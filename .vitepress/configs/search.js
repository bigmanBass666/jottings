// 搜索框

export function search(type) {
  if (type === 'local') {
    return searchLocal
  } else if (type === 'algolia') {
    return searchAlgolia
  } else {
    return {}
  }
}

export const searchLocal = {
  provider: 'local',
  options: {
    shouldSkip: (content) => {
      const skipKeywords = [
        '<div class="language-',
        '<pre>',
        'class="code-group"',
        '![](', // 跳过图片描述
      ]
      return skipKeywords.some((k) => content.includes(k))
    },

    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索',
      },
      modal: {
        displayDetails: '详情',
        resetButtonTitle: '清除',
        backButtonTitle: '返回',
        noResultsText: '无',
        footer: {
          selectText: '选择',
          selectKeyAriaLabel: '选择',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '向上',
          navigateDownKeyAriaLabel: '向下',
          closeText: '关闭',
          closeKeyAriaLabel: '关闭',
        },
      },
    },
  },
}

export const searchAlgolia = {
  //Algolia搜索纯中文版
  provider: 'algolia',
  options: {
    appId: 'F8U9MT51BN',
    apiKey: '9579a880a61a1a6ecac339a0000cdce9',
    indexName: '<INDEX_NAME>',
    locales: {
      root: {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除',
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接',
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者',
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈',
            },
          },
        },
      },
    },
  },
}
