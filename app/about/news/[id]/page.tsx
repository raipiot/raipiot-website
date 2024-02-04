import type { Metadata } from 'next'
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
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="flex justify-center">
          <Button
            className="mt-4 px-8"
            asChild
            variant="outline"
          >
            <NextLink href="/about/news#news-list">返回</NextLink>
          </Button>
        </div>

        <div className="mt-8 flex select-none flex-col">
          <Button
            asChild
            variant="outline"
          >
            {prev ? (
              <NextLink href={`/about/news/${prev.id}`}>
                <span className="truncate">上一篇：{prev.title}</span>
              </NextLink>
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
              <NextLink href={`/about/news/${next.id}`}>
                <span className="truncate">下一篇：{next.title}</span>
              </NextLink>
            ) : (
              <span>已是最后一篇</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
