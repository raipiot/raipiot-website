import SubNav from '@/components/SubNav'

export default function SubNavArea() {
  return (
    <div className="container mx-auto">
      <SubNav
        data={[
          { title: '产品优势', href: '#advantage' },
          { title: '产品架构', href: '#architecture' },
          { title: '产品功能', href: '#feature' },
          { title: '实施案例', href: '#target' },
          { title: '123', href: '' }
        ]}
      />
    </div>
  )
}
