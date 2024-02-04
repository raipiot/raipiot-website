import { SettingsIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '敬请期待'
}

export default function Page() {
  return (
    <main className="container m-auto flex h-[calc(100vh-80px)] flex-col items-center justify-center space-y-6">
      <SettingsIcon
        size="40"
        color="#333333"
        className="animate-spin-slow"
      />
      <span className="pl-6 text-xl font-bold sm:pl-12 sm:text-4xl">全面升级中，敬请期待！</span>
      <Button
        asChild
        variant="outline"
      >
        <NextLink href="/">返回首页</NextLink>
      </Button>
    </main>
  )
}
