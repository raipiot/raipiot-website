import { ChevronRightIcon } from 'lucide-react'

import { cn } from '@/utils'

export default function RecommendArea({ className = '' }: { className?: string }) {
  return (
    <div className={cn('w-full bg-[#606e9357] py-4 text-white sm:py-8', className)}>
      <div className="container mx-auto flex h-full flex-col items-center justify-between sm:flex-row">
        <span className="mb-4 text-xl sm:mb-0 sm:min-w-[80px]">重点推荐</span>
        <div className="mb-4 flex flex-col flex-wrap items-center space-y-4 text-sm sm:mb-0 sm:flex-row sm:space-y-0 sm:text-base">
          <NextLink
            href="/product/gdy"
            className="group flex items-center justify-between"
          >
            <span className="ml-4 underline underline-offset-4 group-hover:underline">
              智能交付协同平台“跟单猿”
            </span>
            <ChevronRightIcon className="w-4 sm:w-6" />
          </NextLink>

          <NextLink
            href="/product/srm"
            className="group flex items-center justify-between"
          >
            <span className="ml-4 underline underline-offset-4 group-hover:underline">
              数字化采购平台
            </span>
            <ChevronRightIcon className="w-4 sm:w-6" />
          </NextLink>

          <NextLink
            href="/product/iot"
            className="group flex items-center justify-between"
          >
            <span className="ml-4 underline underline-offset-4 group-hover:underline">
              云边一体化平台 IoT
            </span>
            <ChevronRightIcon className="w-4 sm:w-6" />
          </NextLink>
        </div>
        <div />
      </div>
    </div>
  )
}
