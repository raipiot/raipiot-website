'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getSrc } from '@/utils'

const solutions = [
  {
    title: '硅片制造业',
    fullTitle: '光伏硅片制造执行管理系统 MES',
    description:
      '为企业提供一套全面、智能化的解决方案，使其在竞争激烈的市场环境中保持领先地位，同时实现高效、高质、可持续的生产经营管理。',
    src: '/img/solutions/silicon.jpg'
  },
  {
    title: '碳碳制造业',
    fullTitle: '碳碳制造业（业财一体化 ERP + BPM）',
    description:
      '通过技术创新、智能化和可持续发展的理念，推动碳碳制造业向更高水平发展，同时满足市场的多样需求。',
    src: '/img/solutions/carbon.jpg'
  },
  {
    title: '石墨制造业',
    fullTitle: '石墨制造业（ERP + BPM）',
    description: '引领石墨时代，智慧制造塑造未来！优化效率，保障质量，追求卓越，共创可持续繁荣。',
    src: '/img/solutions/graphite.jpg'
  },
  {
    title: '碳纤维制品',
    fullTitle: '碳纤维制品（咨询 + ERP + BPM + MES）',
    description: '碳纤智造，品质引领。创新工艺，轻材新生。生产高效，质量卓越。',
    src: '/img/solutions/carbon_fiber.jpg'
  }
]

export default function SolutionArea() {
  return (
    <div className="w-full py-12 sm:py-24">
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
                    <span className="text-xl font-semibold">{i.fullTitle}</span>
                    <p className="mb-8 mt-4">{i.description}</p>
                    <div>
                      <Button asChild>
                        <Link href="/waiting">查看详情</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative h-[350px] w-1/2 ">
                    <Image
                      src={getSrc(i.src)}
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
