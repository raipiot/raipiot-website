'use client'

import { NewsType } from '@/enums'

import NewsListTab from '../NewsListTab'
import NewsItems from './components/NewItems'

export default function NewsListArea() {
  const [activeTabId, setActiveTabId] = useState(NewsType.ALL)

  return (
    <div
      id="news-list"
      className="w-full"
    >
      <NewsListTab
        activeTabId={activeTabId}
        setActiveTabId={setActiveTabId}
      />
      <NewsItems activeTabId={activeTabId} />
    </div>
  )
}
