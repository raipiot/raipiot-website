interface Item {
  title: string
  suffix?: string
  width?: number
}

const getGdyUsersSrc = (name: string, suffix: string) => `/img/gdy/users/${name}.${suffix}`

const getItem = (item: Item) => ({
  title: item.title,
  width: item.width ?? 120,
  src: getGdyUsersSrc(item.title, item.suffix ?? 'png')
})

export const gdyUsers = [
  [
    getItem({ title: '美畅' }),
    getItem({ title: '恒圣石墨', suffix: 'jpg' }),
    getItem({ title: '一道新能' }),
    getItem({ title: '高景太阳能' }),
    getItem({ title: '宇泽半导体' }),
    getItem({ title: '晶科光伏材料' }),
    getItem({ title: '天合光能' }),
    getItem({ title: '大恒能源' }),
    getItem({ title: '吉林联科', suffix: 'jpg' }),
    getItem({ title: '紫安科技' }),
    getItem({ title: '中润光能' }),
    getItem({ title: '快可', suffix: 'jpg' }),
    getItem({ title: '阳光电源' }),
    getItem({ title: '亿达碳业' }),
    getItem({ title: '新特能源' })
  ],
  [
    getItem({ title: '米格新材' }),
    getItem({ title: '创达电子' }),
    getItem({ title: '中信博' }),
    getItem({ title: '中昱科技', suffix: 'jpg' }),
    getItem({ title: '润阳股份' }),
    getItem({ title: '弘元绿能' }),
    getItem({ title: '明冠新材', suffix: 'jpg' }),
    getItem({ title: '江南铝业' }),
    getItem({ title: '环欧国际', suffix: 'jpg' }),
    getItem({ title: '通威太阳能' }),
    getItem({ title: '鑫铂股份' }),
    getItem({ title: '顺丰速运' })
  ],
  [
    getItem({ title: '中外运物流', suffix: 'jpg' }),
    getItem({ title: '元德物流' }),
    getItem({ title: '大田物流' }),
    getItem({ title: '快智运物联科技', suffix: 'jpg' }),
    getItem({ title: '恒安供应链' }),
    getItem({ title: '泽润新能' }),
    getItem({ title: '苏美达' }),
    getItem({ title: '跨越速运' }),
    getItem({ title: '中通快运' }),
    getItem({ title: '丰尔达物流' }),
    getItem({ title: '京东物流', suffix: 'jpg' }),
    getItem({ title: '先韦能源' }),
    getItem({ title: '凯宏铝业' }),
    getItem({ title: '双良节能' })
  ]
]
