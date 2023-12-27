import AboutArea from './components/AboutArea'
import AboutCardsArea from './components/AboutCardsArea'
import BannerArea from './components/BannerArea'
import CertificationArea from './components/CertificationArea'
import HistoryArea from './components/HistoryArea'
import ValuesArea from './components/ValuesArea'

export const metadata = {
  title: '关于我们'
}

export default function Page() {
  return (
    <main className="flex flex-col items-center space-y-24 pb-24">
      <BannerArea />
      <AboutArea />
      <AboutCardsArea />
      <ValuesArea />
      <HistoryArea />
      <CertificationArea />
    </main>
  )
}
