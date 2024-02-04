import ContactArea from '@/components/ContactArea'

import BannerArea from './components/BannerArea'
import CertificationArea from './components/CertificationArea'
import EcosystemArea from './components/EcosystemArea'
import ProductArray from './components/ProductArrayArea'
import RecommendArea from './components/RecommendArea'
// import SolutionArea from './components/SolutionArea'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea
        title="解密数据，赋能决策"
        subTitle="制造业数字化转型综合服务商"
        bottomArea={<RecommendArea className="absolute bottom-0" />}
      />

      <ProductArray />
      <CertificationArea />
      {/* <SolutionArea /> */}
      <EcosystemArea />
      <ContactArea />
    </div>
  )
}
