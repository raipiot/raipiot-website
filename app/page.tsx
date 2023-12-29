import ContactArea from '@/components/ContactArea'

import BannerArea from './components/BannerArea'
import CertificationArea from './components/CertificationArea'
import EcosystemArea from './components/EcosystemArea'
import ProductArray from './components/ProductArrayArea'
import RecommendArea from './components/RecommendArea'
import SolutionArea from './components/SolutionArea'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <BannerArea />
      <RecommendArea />
      <ProductArray />
      <CertificationArea />
      <SolutionArea />
      <EcosystemArea />
      <ContactArea />
    </main>
  )
}
