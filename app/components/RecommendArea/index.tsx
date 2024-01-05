import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function RecommendArea() {
  return (
    <div className="w-full bg-[#606E93] py-8 text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <span className="text-xl">重点推荐</span>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-24">
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

          <div className="flex items-center space-x-12">
            <Link
              href="/waiting"
              className="group flex w-[250px] items-center justify-between"
            >
              <span className="ml-4 underline-offset-4 group-hover:underline">
                云边一体化平台 IoT
              </span>
              <ChevronRightIcon />
            </Link>

            <div className="opacity-0">x</div>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}
