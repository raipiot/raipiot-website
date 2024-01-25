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
          src={getSrc('/img/banner/iot-banner.png')}
          alt=""
          sizes="100vw"
          fill
          priority
          placeholder={shimmerPlaceholder(9999, 455)}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">云边一体化平台 IoT</span>
          <div className="flex flex-col space-y-2">
            <span>将物联网（IoT）技术与云计算相结合，实现智能化、高效率的数据采集、处理和应用</span>
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
