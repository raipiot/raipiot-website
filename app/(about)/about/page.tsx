import AboutArea from './components/AboutArea'
import AboutCardsArea from './components/AboutCardsArea'
import BannerArea from './components/BannerArea'
import HistoryArea from './components/HistoryArea'
import ValuesArea from './components/ValuesArea'

export default function Page() {
  return (
    <main className="flex flex-col items-center space-y-24 pb-24">
      <BannerArea />
      <AboutArea />
      <AboutCardsArea />
      <ValuesArea />
      {/* <ValuesCardArea /> */}
      <HistoryArea />
    </main>
  )
}
