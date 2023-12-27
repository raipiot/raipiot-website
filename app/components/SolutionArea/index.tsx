'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const solutions = [
  {
    title: '光伏硅片制造执行管理系统 MES',
    description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    src: 'https://www.rootcloud.com/vancheerfile/images/2023/11/20231109140127079.png'
  },
  {
    title: '碳碳制造业（业财一体化 ERP + BPM）',
    description: 'xxxxxx',
    src: 'https://www.rootcloud.com/vancheerfile/images/2023/11/20231109140140246.png'
  },
  {
    title: '石墨制造业（ERP + BPM）',
    description: 'xxxxxx',
    src: 'https://www.rootcloud.com/vancheerfile/images/2023/11/20231109140153942.png'
  },
  {
    title: '碳纤维制品（咨询 + ERP + BPM + MES）',
    description: 'xxxxxx',
    src: 'https://www.rootcloud.com/vancheerfile/images/2023/11/20231109155449925.png'
  }
]

export default function SolutionArea() {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto flex flex-col items-center">
        <span className="mb-10 text-3xl">解决方案</span>
        <Tabs
          defaultValue={solutions.at(0)!.title}
          className="w-full"
        >
          <TabsList className="m-auto flex w-fit justify-center">
            {solutions.map((i) => (
              <TabsTrigger
                key={i.title}
                value={i.title}
              >
                {i.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {solutions.map((i) => (
            <TabsContent
              value={i.title}
              key={i.title}
            >
              <Card className="overflow-hidden">
                <CardContent className="flex p-0">
                  <div className="= flex w-1/2 flex-col flex-wrap justify-center pl-12">
                    <span className="text-xl font-semibold">{i.title}</span>
                    <p className="mb-8 mt-4">{i.description}</p>
                    <div>
                      <Button
                        asChild
                        variant="outline"
                      >
                        <Link href="/waiting">查看详情</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[350px] w-1/2 ">
                    <Image
                      src={i.src}
                      alt=""
                      fill
                      sizes="50vw"
                      fetchPriority="high"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
