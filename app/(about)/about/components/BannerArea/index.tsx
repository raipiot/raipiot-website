import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[455px] w-full items-center">
        <Image
          className="absolute left-0 top-0 -z-50"
          src="https://i0.wp.com/blog.particle.io/wp-content/uploads/2019/06/bg.jpg"
          alt=""
          sizes="100vw"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-4 px-4 text-white sm:px-0">
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
