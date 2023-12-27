import { ChevronRightIcon, CloudCogIcon } from 'lucide-react'
import Link from 'next/link'

export default function RecommendArea() {
  return (
    <div className="h-[150px] w-full bg-[#333333] text-white">
      <div className="container mx-auto flex h-full items-center justify-between">
        <span className="text-2xl">重点推荐</span>
        <div>
          <Link
            href="/waiting"
            className="group flex items-center"
          >
            <CloudCogIcon />
            <span className="ml-4 mr-12 text-xl underline-offset-4 group-hover:underline">
              智能供应链协同平台“跟单猿”
            </span>
            <ChevronRightIcon />
          </Link>
        </div>
        <div />
      </div>
    </div>
  )
}
