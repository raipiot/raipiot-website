import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'

import AdvantageArea from './components/AdvantageArea'
import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'
import FeatureArea from './components/FeatureArea'
import SubNavArea from './components/SubNavArea'

export const metadata: Metadata = {
  title: '智能供应链协同平台“跟单猿”'
}

export default function Page() {
  return (
    <main className="flex flex-col items-center space-y-24">
      <BannerArea />
      <SubNavArea />
      <AdvantageArea />
      <ArchitectureArea />
      <FeatureArea />
      <ContactArea />
    </main>
  )
}
