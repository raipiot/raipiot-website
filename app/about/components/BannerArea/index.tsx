import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getSrc, shimmerPlaceholder } from '@/utils'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[455px] w-full items-center">
        <Image
          className="-z-50"
          src={getSrc('/img/banner/about.jpg')}
          alt=""
          sizes="100vw"
          fill
          priority
          quality={40}
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">为奋勇攀登的组织搭梯架桥</span>
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
