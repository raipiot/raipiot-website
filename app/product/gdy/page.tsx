import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'
import FeatureArea from './components/FeatureArea'
import UserArea from './components/UserArea'

export const metadata: Metadata = {
  title: '智能交付协同平台“跟单猿”'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      <SubNav
        data={[
          { title: '产品架构', id: 'architecture' },
          { title: '功能介绍', id: 'feature' },
          { title: '用户群体', id: 'user' }
        ]}
      />
      <ArchitectureArea />
      <FeatureArea />
      <UserArea />
      <ContactArea />
    </div>
  )
}
