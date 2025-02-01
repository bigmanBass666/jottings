// 导航栏 https://vitepress.dev/zh/reference/default-theme-nav

export const nav = [
  // 哲思 文学 社科
  {
    text: '哲思 文学 社科',
    items: [
      {
        items: [
          { text: '博主', link: '/Philosophy/1.Blogger/jack/reading_order' },
          { text: '读书笔记', link: '/Philosophy/2.Reading_Notes/Writing_Lessons' },
          { text: '积累本', link: '/Philosophy/3.Accumulation/Undecided' },
          { text: '箴言', link: '/Philosophy/4.Aphorisms/1.intro' },
          { text: '其他', link: '/Philosophy/5.Others/The_Porridge_Problem' },
        ]
      }
    ]
  },

  // 护肤
  {
    text: '护肤',
    items: [
      {
        items: [
          { text: '痤疮', link: '/Skin_Care/1.Acne/1.Zhihu_Dr_Rui_Yan/1.intro' },
          { text: '洗发水', link: '/Skin_Care/2.Shampoo' },
          { text: '杂项', link: '/Skin_Care/Miscellaneous' },
        ]
      }
    ]
  },

  // 自然科学
  {
    text: '自然科学',
    items: [
      {
        items: [
          { text: '物理学', link: '/Natural_Sciences/Physics/Active_Noise_Cancelling' },
          { text: '营养学', link: '/Natural_Sciences/Nutrition/Seaweed_Turns_Green_After_Boiling' },
        ]
      }
    ]
  },

  // beatbox
  {
    text: 'beatbox',
    items: [
      {
        items: [
          { text: 'Wing', link: '/beatbox/wing/i_want_it' },
          { text: 'Osis', link: '/beatbox/osis/cash' },
          { text: 'Improver', link: '/beatbox/improver/The_Business' },
        ]
      }
    ]
  },

  // 穿搭
  {
    text: '穿搭',
    link: '/Fashion/fabric'
    // items: [
    //   {
    //     items: [
    //       { text: '衣', link: '/Fashion/Clothes/TShirt' },
    //       { text: '裤', link: '/Fashion/Pants/intro' },
    //       { text: '鞋', link: '/Fashion/shoes/intro' },
    //     ]
    //   }
    // ]
  },
]