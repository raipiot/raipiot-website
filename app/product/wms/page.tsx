import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'

export const metadata: Metadata = {
  title: '企业仓储管理 WMS'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      <SubNav data={[]} />
      <ArchitectureArea />
      <ContactArea />
    </div>
  )
}
