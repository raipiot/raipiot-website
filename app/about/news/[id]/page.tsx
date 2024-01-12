import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { newsData } from '@/data'

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

  if (!data) {
    redirect('/404')
  }

  return <div className="container mx-auto max-w-[780px] p-4">{params.id}</div>
}
