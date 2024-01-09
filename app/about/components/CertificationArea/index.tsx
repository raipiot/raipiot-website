'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useRef } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn, getSrc } from '@/utils'

const data = [
  { title: '软件企业证书', src: '/img/cert/software_1.jpg', width: 600 },
  { title: '软件产品证书', src: '/img/cert/software_2.jpg', width: 600 },
  { title: 'ISO/IEC 20000-1', src: '/img/cert/20000_zh.jpg', width: 250 },
  { title: 'ISO/IEC 20000-1', src: '/img/cert/20000_en.jpg', width: 250 },
  { title: 'ISO/IEC 27001 证书', src: '/img/cert/27001_zh.jpg', width: 250 },
  { title: 'ISO/IEC 27001 证书', src: '/img/cert/27001_en.jpg', width: 250 },
  { title: 'ISO9001 证书', src: '/img/cert/iso9001.jpg', width: 250 },
  { title: '理事单位', src: '/img/cert/gu.jpg', width: 250 }
]

export default function CertificationArea() {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnMouseEnter: true
    })
  )

  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center px-4 py-12 sm:py-24">
        <span className="mb-10 text-3xl font-medium">荣誉资质</span>
        <Carousel
          className="w-full max-w-[calc(100%-80px)] sm:max-w-5xl 2xl:max-w-full"
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="flex items-center">
            {data.map((i, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  'select-none',
                  index <= 1 ? 'md:basis-1/2 lg:basis-1/2' : 'md:basis-1/3 lg:basis-1/3'
                )}
              >
                <div className="flex flex-col items-center space-y-3 p-1">
                  <Image
                    src={getSrc(i.src)}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: i.width,
                      height: 'auto'
                    }}
                  />
                  <span className="text-sm">{i.title}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
