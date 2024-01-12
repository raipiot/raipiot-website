import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getSrc } from '@/utils'

const data = [
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
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <span className="mb-10 text-3xl font-medium">解决方案</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {data.map((i) => (
            <Card
              className="group flex cursor-pointer flex-col gap-4 overflow-hidden"
              key={i.title}
            >
              <CardHeader className="relative h-[200px] overflow-hidden">
                <Image
                  className="select-none object-cover object-center transition-all sm:group-hover:scale-110"
                  src={getSrc(i.src)}
                  alt=""
                  fill
                  sizes="100vw"
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-2 p-4">
                <div className="text-center font-medium">{i.title}</div>
                {i.description && <div className="flex-1 text-sm">{i.description}</div>}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link href="/waiting">了解详情</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
