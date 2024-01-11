import type { Metadata } from 'next'

import ContactArea from '@/components/ContactArea'
import SubNav from '@/components/SubNav'

import AdvantageArea from './components/AdvantageArea'
import ArchitectureArea from './components/ArchitectureArea'
import BannerArea from './components/BannerArea'
import CustomerCaseArea from './components/CustomerCaseArea'
import PainPointsArea from './components/PainPointsArea'

export const metadata: Metadata = {
  title: '制造执行管理 MES'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      <SubNav
        data={[
          { title: '企业痛点', id: 'pain-points' },
          { title: '产品架构', id: 'architecture' },
          { title: '产品优势', id: 'advantage' },
          { title: '客户案例', id: 'customer-case' }
        ]}
      />
      <PainPointsArea />
      <ArchitectureArea />
      <AdvantageArea />
      <CustomerCaseArea />
      <ContactArea />
    </div>
  )
}
