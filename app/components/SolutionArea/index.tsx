import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CaseRecord } from '@/constants/CaseRecord'
import { getSrc } from '@/utils'

const data = [
  {
    title: CaseRecord.yuze.name,
    fullTitle: '',
    description: CaseRecord.yuze.intro,
    src: '/img/solutions/silicon.jpg',
    route: CaseRecord.yuze.route
  },
  {
    title: CaseRecord.meilande.name,
    fullTitle: '碳碳制造业（业财一体化 ERP + BPM）',
    description: CaseRecord.meilande.intro,
    src: '/img/solutions/carbon.jpg',
    route: CaseRecord.meilande.route
  },
  {
    title: CaseRecord.hengsheng.name,
    fullTitle: '石墨制造业（ERP + BPM）',
    description: CaseRecord.meilande.intro,
    src: '/img/solutions/graphite.jpg',
    route: CaseRecord.hengsheng.route
  },
  {
    title: CaseRecord.yida.name,
    fullTitle: '碳纤维制品（咨询 + ERP + BPM + MES）',
    description: CaseRecord.yida.intro,
    src: '/img/solutions/carbon_fiber.jpg',
    route: CaseRecord.yida.route
  }
]

export default function SolutionArea() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <span className="mb-10 text-3xl font-medium">客户案例</span>
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
                {i.description?.length && (
                  <div className="flex-1 text-sm">
                    {i.description.map((intro) => (
                      <div
                        key={intro}
                        className="mb-1 text-center"
                      >
                        {intro}
                      </div>
                    ))}
                  </div>
                )}
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link href={i.route}>了解详情</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
