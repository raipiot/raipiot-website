import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { newsData } from '@/data'

import BannerArea from './components/BannerArea'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = newsData.find((doc) => doc.id === params.id)!
  return {
    title: `${data.title} | 咨询动态`
  }
}

export default function Page({ params }: Props) {
  const data = newsData.find((doc) => doc.id === params.id)!
  const dataIndex = newsData.findIndex((doc) => doc.id === params.id)

  const prev = newsData.find((_, index) => index === dataIndex - 1)
  const next = newsData.find((_, index) => index === dataIndex + 1)

  if (!data) {
    redirect('/404')
  }

  return (
    <div>
      <BannerArea {...data} />
      <div className="container mx-auto my-12 max-w-[980px] sm:my-24">
        <div
          className="leading-9"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="flex justify-center">
          <Button
            className="mt-4 px-8"
            asChild
            variant="outline"
          >
            <Link href="/about/news#news-list">返回</Link>
          </Button>
        </div>

        <div className="mt-8 flex select-none flex-col">
          <Button
            asChild
            variant="outline"
          >
            {prev ? (
              <Link href={`/about/news/${prev.id}`}>
                <span className="truncate">上一篇：{prev.title}</span>
              </Link>
            ) : (
              <span>已是第一篇</span>
            )}
          </Button>

          <Button
            className="mt-2"
            asChild
            variant="outline"
          >
            {next ? (
              <Link href={`/about/news/${next.id}`}>
                <span className="truncate">下一篇：{next.title}</span>
              </Link>
            ) : (
              <span>已是最后一篇</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
