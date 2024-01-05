interface NavbarItem {
  title: string
  href?: string
  children?: NavbarItem[]
  vertical?: boolean
}

export const navbar: NavbarItem[] = [
  {
    title: '产品',
    children: [
      {
        title: '生态协同系列产品',
        children: [
          {
            title: '智能供应链协同平台“跟单猿”',
            href: '/product/gdy'
          },
          { title: '数字化采购平台', href: '/waiting' }
        ]
      },
      {
        title: '智能制造',
        children: [
          { title: '生产制造管理 MES', href: '/waiting' },
          { title: '云边一体化平台 IoT', href: '/waiting' },
          { title: '产品生命周期管理 PLM', href: '/waiting' }
        ]
      },
      {
        title: '物流管理',
        children: [
          { title: '企业仓储管理 WMS', href: '/waiting' },
          { title: '企业物流运输管理 TMS', href: '/waiting' },
          { title: '承运人运营管理 OMS', href: '/waiting' }
        ]
      },
      {
        title: '业财联动基石',
        children: [{ title: 'ERP（EPICOR）', href: '/waiting' }]
      },
      {
        title: '办公自动化与内控流程管理',
        children: [{ title: '炎黄盈动 BPM', href: '/waiting' }]
      }
    ]
  },
  {
    title: '解决方案',
    children: [
      { title: '光伏硅片制造执行管理系统 MES', href: '/waiting' },
      { title: '碳碳制造业（业财一体化 ERP + BPM）', href: '/waiting' },
      { title: '石墨制造业（ERP + BPM）', href: '/waiting' },
      { title: '碳纤维制品（咨询 + ERP + BPM + MES）', href: '/waiting' }
    ],
    vertical: true
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
      {
        title: '人才天地',
        href: '/about/position'
      }
    ]
  }
]
