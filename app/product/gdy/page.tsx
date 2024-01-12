import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'
import FeatureArea from './components/FeatureArea'
import PainPointArea from './components/PainPointsArea'
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
          { title: '行业痛点', id: 'pain-points' },
          { title: '产品架构', id: 'architecture' },
          { title: '产品功能', id: 'feature' },
          { title: '用户群体', id: 'user' }
        ]}
      />
      <PainPointArea />
      <ArchitectureArea />
      <FeatureArea />
      <UserArea />
      <ContactArea />
    </div>
  )
}
