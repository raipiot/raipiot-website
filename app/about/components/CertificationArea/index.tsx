'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const data = [
  {
    title: '软件企业、产品证书',
    srcList: [
      { src: '/img/cert/software_1.jpg', width: 400, height: 400 },
      { src: '/img/cert/software_2.jpg', width: 400, height: 400 }
    ]
  },
  {
    title: 'ISO/IEC 20000-1',
    srcList: [
      { src: '/img/cert/20000_zh.jpg', width: 300, height: 300 },
      { src: '/img/cert/20000_en.jpg', width: 300, height: 300 }
    ]
  },
  {
    title: 'ISO/IEC 27001 证书',
    srcList: [
      { src: '/img/cert/27001_zh.jpg', width: 300, height: 300 },
      { src: '/img/cert/27001_en.jpg', width: 300, height: 300 }
    ]
  },
  {
    title: 'ISO9001 证书',
    srcList: [{ src: '/img/cert/iso9001.jpg', width: 300, height: 300 }]
  },
  {
    title: '理事单位',
    srcList: [{ src: '/img/cert/gu.jpg', width: 300, height: 300 }]
  }
]

export default function CertificationArea() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % data.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getCurrentTitle = () => data.at(currentIndex)!.title

  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-24">
        <span className="mb-10 text-3xl">荣誉资质</span>
        <Tabs
          defaultValue={data.at(0)!.title}
          className="w-full"
          value={getCurrentTitle()}
        >
          <TabsList className="m-auto mb-10 flex w-fit justify-center">
            {data.map((i, idx) => (
              <TabsTrigger
                key={i.title}
                value={i.title}
                onClick={() => setCurrentIndex(idx)}
              >
                {i.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((i) => (
            <TabsContent
              value={i.title}
              key={i.title}
              className="flex justify-center space-x-8"
            >
              {i.srcList.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  fetchPriority="high"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
