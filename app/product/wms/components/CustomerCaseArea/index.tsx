import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getSrc } from '@/utils'

const data = [
  {
    title: '某单晶制造公司 WMS 项目',
    content: '通过睿朴麟 WMS 解决方案，提升公司智能仓储管理能力，提高仓库利用率。',
    src: '/img/banner/values_1.jpg'
  },
  {
    title: '某新材料公司 WMS 项目',
    content: '通过睿朴麟 WMS 解决方案，提升公司智能仓储管理能力，提高仓库利用率。',
    src: '/img/banner/values_2.jpg'
  }
]

export default function CustomerCaseArea() {
  return (
    <div
      id="customer-case"
      className="w-full"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-24">
        <div className="mb-10 text-3xl font-medium">客户案例</div>
        <div className="flex flex-col items-center space-y-8 sm:flex-row sm:space-x-20 sm:space-y-0">
          {data.map((i) => (
            <Card
              className="group w-[350px] cursor-pointer overflow-hidden"
              key={i.title}
            >
              <CardHeader className="relative h-[250px] overflow-hidden">
                <NextImage
                  src={getSrc(i.src)}
                  alt=""
                  fill
                  className="select-none object-cover transition-all sm:group-hover:scale-110"
                  sizes="100vw"
                />
              </CardHeader>
              <CardContent className="flex flex-col space-y-2 p-4">
                <span>{i.title}</span>
                <span className="text-sm">{i.content}</span>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <NextLink href="/waiting">了解详情</NextLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
