'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { newsData } from '@/data'
import { NewsType } from '@/enums'
import { getSrc } from '@/utils'

import { getNewsTypeText } from '../../utils'
import NewsListTab from '../NewsListTab'

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

      <div className="container mx-auto py-12 sm:py-24">
        <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {newsData
            .filter((i) => (activeTabId === 0 ? true : i.type === activeTabId))
            .map((i) => (
              <Link href={`/about/news/${i.id}`}>
                <Card
                  key={i.id}
                  className="group flex h-full w-full cursor-pointer flex-col overflow-hidden"
                >
                  <CardHeader className="flex flex-1 flex-col space-y-4">
                    <div className="flex justify-between text-sm text-[#666666]">
                      <span>{i.createdAt}</span>
                      <span>{getNewsTypeText(i.type)}</span>
                    </div>
                    <div className="line-clamp-2 text-2xl font-medium">{i.title}</div>
                    <div
                      className="line-clamp-2 text-sm text-[#666666]"
                      dangerouslySetInnerHTML={{ __html: i.content }}
                    />
                  </CardHeader>

                  <CardContent className="relative h-[250px] overflow-hidden">
                    <Image
                      className="select-none object-cover transition-all sm:group-hover:scale-110"
                      src={getSrc(i.src)}
                      alt=""
                      fill
                      sizes="100vw"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
