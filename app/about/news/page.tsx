import type { Metadata } from 'next'

import BannerArea from './components/BannerArea'
import NewsListArea from './components/NewsListArea'

export const metadata: Metadata = {
  title: '咨询动态'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      <NewsListArea />
    </div>
  )
}
