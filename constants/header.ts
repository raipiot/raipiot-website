interface NavbarItem {
  title: string
  href?: string
  children?: NavbarItem[]
}

export const navbar: NavbarItem[] = [
  {
    title: '产品',
    children: [
      {
        title: '智能供应链协同平台“跟单猿”',
        href: '/waiting'
      },
      {
        title: '数字化采购平台',
        href: '/waiting'
      },
      {
        title: 'IoT 云边一体化',
        href: '/waiting'
      }
    ]
  },
  {
    title: '解决方案',
    children: [
      {
        title: '光伏硅片制造执行管理系统 MES',
        href: '/waiting'
      },
      {
        title: '碳碳制造业（业财一体化 ERP + BPM）',
        href: '/waiting'
      },
      {
        title: '石墨制造业（ERP + BPM）',
        href: '/waiting'
      },
      {
        title: '碳纤维制品（咨询 + ERP + BPM + MES）',
        href: '/waiting'
      }
    ]
  },
  {
    title: '关于我们',
    children: [
      { title: '睿朴麟介绍', href: '/about' },
      {
        title: '资讯动态',
        href: '/waiting'
        // href: '/about/news'
      },
      { title: '人才天地', href: '/about/position' }
    ]
  }
]
