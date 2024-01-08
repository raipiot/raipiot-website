import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function RecommendArea() {
  return (
    <div className="w-full bg-[#606E93] py-4 text-white sm:py-8">
      <div className="container mx-auto flex h-full flex-col items-center justify-between sm:flex-row">
        <span className="mb-4 text-xl sm:mb-0">重点推荐</span>
        <div className="flex flex-col space-y-2 sm:space-y-6">
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-24 sm:space-y-0">
            <Link
              href="/waiting"
              className="group flex w-[250px] items-center justify-between"
            >
              <span className="ml-4 underline-offset-4 group-hover:underline">
                智能交付协同平台“跟单猿”
              </span>
              <ChevronRightIcon />
            </Link>

            <Link
              href="/waiting"
              className="group flex w-[250px] items-center justify-between"
            >
              <span className="ml-4 underline-offset-4 group-hover:underline">数字化采购平台</span>
              <ChevronRightIcon />
            </Link>
          </div>

          <div className="flex items-center sm:space-x-12">
            <Link
              href="/waiting"
              className="group flex w-[250px] items-center justify-between"
            >
              <span className="ml-4 underline-offset-4 group-hover:underline">
                云边一体化平台 IoT
              </span>
              <ChevronRightIcon />
            </Link>

            <div className="hidden opacity-0 sm:block">x</div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}
