import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/Button'

export const metadata: Metadata = {
  title: '敬请期待'
}

export default function Page() {
  return (
    <main className="container absolute inset-0 m-auto flex h-fit w-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">全面升级中，敬请期待！</span>
      <Link href="/">
        <Button>返回首页</Button>
      </Link>
    </main>
  )
}
