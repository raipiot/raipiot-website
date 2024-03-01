import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

interface IProps {
  title: string
  subTitle: ReactNode
  bottomArea?: ReactNode
}

export default function BannerArea({ title, subTitle, bottomArea = null }: IProps) {
  return (
    <div className="relative h-fit w-full bg-black">
      <div className="relative flex h-[450px] w-full flex-wrap items-center overflow-hidden">
        {/* <NextImage
          className="-z-50"
          src={getSrc('/img/banner/home.jpg')}
          alt=""
          sizes="100vw"
          fill
          priority
          quality={40}
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        /> */}
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="/img/banner/home.png"
          className="absolute inset-x-0 top-0 mx-auto w-[1200px] max-w-[100vw] object-cover"
        >
          <source
            src="/video/home.mov"
            type="video/mp4"
          />
        </video>
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container z-10 m-auto my-0 flex flex-col space-y-6 pt-4 text-white">
          <span className="text-4xl">{title}</span>
          <div className="flex flex-col space-y-2">{subTitle}</div>
          <div>
            <Button
              asChild
              variant="secondary"
            >
              <NextLink href="/waiting">预约交流</NextLink>
            </Button>
          </div>
        </div>
        {bottomArea && <div className="w-full">{bottomArea}</div>}
      </div>
    </div>
  )
}
