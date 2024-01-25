import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getSrc, shimmerPlaceholder } from '@/utils'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[450px] w-full items-center">
        <Image
          className="absolute left-0 top-0 -z-50 object-cover object-center"
          src={getSrc('/img/banner/wms-banner.png')}
          alt=""
          sizes="100vw"
          fill
          priority
          placeholder={shimmerPlaceholder(9999, 455)}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">企业仓储管理 WMS</span>
          <div className="flex flex-col space-y-2">
            <span>
              提高仓库管理、作业效率和准确性，将仓库管理过程数字化，帮助企业实现精益化管理
            </span>
          </div>
          <div>
            <Button
              asChild
              variant="secondary"
            >
              <Link href="/waiting">预约交流</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
