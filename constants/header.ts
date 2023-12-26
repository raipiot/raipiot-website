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
        title: '跟单猿',
        href: '/waiting'
      }
    ]
  },
  {
    title: '解决方案',
    children: [
      {
        title: 'MES',
        href: '/waiting'
      }
    ]
  },
  { title: '案例' },
  {
    title: '关于我们',
    href: '/about',
    children: [
      { title: '睿朴麟介绍', href: '/about' },
      { title: '资讯动态', href: '/about/news' },
      { title: '品牌建设', href: '/about/brand' }
    ]
  }
]
