import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'

export const metadata: Metadata = {
  title: '云边一体化平台 IoT'
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
