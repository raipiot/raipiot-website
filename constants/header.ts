interface NavbarItem {
  title?: string
  href?: string
  children?: NavbarItem[]
  vertical?: boolean
  hidden?: boolean
  divider?: boolean
  hot?: boolean
}

export const navbar: NavbarItem[] = [
  {
    title: '产品',
    children: [
      {
        title: '供应链生态协同',
        children: [
          { title: '智能交付协同平台“跟单猿”', href: '/product/gdy', hot: true },
          { title: '数字化采购平台', href: '/product/srm' },
          { divider: true },
          { title: '企业物流运输管理 TMS', href: '/product/tms' },
          { title: '承运人运营管理 OMS', href: '/product/oms' },
          { title: '供应商关系管理 SRM', href: '/product/srm' },
          { title: '客户关系管理 CRM', href: '/product/crm' }
        ]
      },
      {
        title: '智能制造',
        children: [
          { title: '制造执行管理 MES', href: '/product/mes', hot: true },
          { title: '企业仓储管理 WMS', href: '/product/wms', hot: true },
          { title: '产品生命周期管理 PLM', href: '/product/plm' },
          { title: '云边一体化平台 IoT', href: '/product/iot', hot: true }
        ]
      },
      {
        title: '业财联动基石',
        children: [{ title: '企业资源管理 ERP', href: '/product/erp' }]
      },
      {
        title: '集成化办公管理平台',
        children: [
          { title: '人力资源管理 HRM', href: '/product/bpm' },
          { title: '费控管理', href: '/product/bpm' },
          { title: '项目管理', href: '/product/bpm' },
          { title: '流程管理', href: '/product/bpm' },
          { title: '预算管理', href: '/product/bpm' }
        ]
      }
    ]
  },
  {
    title: '解决方案',
    // children: [{ title: '全面升级中，敬请期待！', href: '/waiting' }],
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
      { title: '资讯动态', href: '/about/news' },
      { title: '人才天地', href: '/about/team' }
    ],
    vertical: true
  }
]
