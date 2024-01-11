'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { cn, getSrc } from '@/utils'

const data = [
  {
    index: '01',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '02',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    index: '03',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '04',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    index: '05',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '06',
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  }
]

export default function FeatureArea() {
  const imgRefs = useRef<HTMLDivElement[]>([])

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   const ctx = gsap.context(() => {
  //     imgRefs.current.forEach((img) => {
  //       gsap.from(img, {
  //         duration: 500,
  //         autoAlpha: 0,
  //         y: 150,
  //         opacity: 0,
  //         ease: 'expo.in',
  //         scrollTrigger: {
  //           trigger: img,
  //           start: 'top bottom',
  //           end: 'bottom top',
  //           toggleActions: 'play none none reset',
  //           scrub: true
  //         }
  //       })
  //     })
  //   })
  //   return () => {
  //     ctx.revert()
  //   }
  // }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el)
    }
  }

  return (
    <div
      id="feature"
      className="w-full py-6 sm:py-12"
    >
      <div className="container mx-auto flex flex-col space-y-4 text-center">
        <span className="mb-10 text-3xl font-medium">产品功能</span>
      </div>

      {data.map((i, index) => (
        <div
          style={{ backgroundColor: i.bgColor }}
          key={index}
          className="w-full"
        >
          <div
            className={cn(
              'flex flex-col sm:flex-row w-full container mx-auto px-4 py-12',
              i.reverse && 'sm:flex-row-reverse'
            )}
          >
            <div
              className="relative h-[200px] sm:h-[350px] sm:flex-1"
              ref={addToRefs}
            >
              <Image
                src={getSrc(i.src)}
                alt=""
                fill
                className="select-none rounded-sm object-cover shadow-md"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-2 pt-8 sm:items-start sm:space-y-4 sm:p-8">
              <span className="bg-gradient-to-b from-[#333333] to-[#dddddd] bg-clip-text text-6xl text-transparent">
                {i.index}
              </span>
              <span className="text-xl font-medium">{i.title}</span>
              <span className="text-sm leading-8 text-[#666666]">{i.description}</span>
              <div>
                <Button
                  asChild
                  variant="outline"
                >
                  <Link href="/waiting">立即咨询</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
