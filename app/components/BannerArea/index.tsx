import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { getSrc, shimmerPlaceholder } from '@/utils'

interface IProps {
  title: string
  subTitle: ReactNode
  bottomArea?: ReactNode
}

export default function BannerArea({ title, subTitle, bottomArea = null }: IProps) {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[450px] w-full flex-wrap items-center">
        <Image
          className="-z-50"
          src={getSrc('/img/banner/home.jpg')}
          alt=""
          sizes="100vw"
          fill
          priority
          quality={40}
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">{title}</span>
          <div className="flex flex-col space-y-2">{subTitle}</div>
          <div>
            <Button
              asChild
              variant="secondary"
            >
              <Link href="/waiting">预约交流</Link>
            </Button>
          </div>
        </div>
        {bottomArea && <div className="w-full">{bottomArea}</div>}
      </div>
    </div>
  )
}
