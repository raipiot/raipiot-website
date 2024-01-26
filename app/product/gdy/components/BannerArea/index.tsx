import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getSrc, shimmerPlaceholder } from '@/utils'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[450px] w-full items-center">
        <Image
          className="absolute left-0 top-0 -z-50"
          src={getSrc('/img/banner/gdy-banner.png')}
          alt=""
          sizes="100vw"
          fill
          priority
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">智能交付协同平台“跟单猿”</span>
          <div className="flex flex-col space-y-2">
            <span>
              打造智能交付协同平台，帮助生态圈内的上下游企业降低交易成本，提高供应链竞争力
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
