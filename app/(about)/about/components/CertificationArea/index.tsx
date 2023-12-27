'use client'

import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const data = [
  {
    title: '软件产品证书',
    srcList: [
      { src: '/img/cert/software-1.png', width: 200, height: 200 },
      { src: '/img/cert/software-2.png', width: 200, height: 200 }
    ]
  },
  {
    title: 'ISO/IEC 20000-1',
    srcList: [
      { src: '/img/cert/20000_zh.jpg', width: 200, height: 200 },
      { src: '/img/cert/20000_en.jpg', width: 200, height: 200 }
    ]
  },
  {
    title: 'ISO/IEC 27001 证书',
    srcList: [
      { src: '/img/cert/27001_zh.jpg', width: 200, height: 200 },
      { src: '/img/cert/27001_en.jpg', width: 200, height: 200 }
    ]
  },
  {
    title: 'ISO9001 证书',
    srcList: [{ src: '/img/cert/iso9001.jpg', width: 200, height: 200 }]
  },
  {
    title: '理事单位',
    srcList: [{ src: '/img/cert/gu.jpg', width: 200, height: 200 }]
  }
]

export default function CertificationArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-24">
        <span className="mb-10 text-3xl">荣誉资质</span>
        <Tabs
          defaultValue={data.at(0)!.title}
          className="w-full"
        >
          <TabsList className="m-auto flex w-fit justify-center">
            {data.map((i) => (
              <TabsTrigger
                key={i.title}
                value={i.title}
              >
                {i.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((i) => (
            <TabsContent
              value={i.title}
              key={i.title}
            >
              <Card className="overflow-hidden">
                <CardContent className="flex">
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
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
