import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'

export const metadata: Metadata = {
  title: '制造执行管理 MES'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      <SubNav
        data={[
          { title: '产品架构', id: 'architecture' },
          { title: '产品功能', id: 'feature' }
        ]}
      />
      <ArchitectureArea />
      <ContactArea />
    </div>
  )
}
