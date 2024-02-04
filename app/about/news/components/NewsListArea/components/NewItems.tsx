import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { newsData } from '@/data'
import { getSrc } from '@/utils'

import { getNewsTypeText } from '../../../utils'

interface Props {
  activeTabId: number
}

export default function NewItems({ activeTabId }: Props) {
  const router = useRouter()
  return (
    <div className="container mx-auto py-12 sm:py-24">
      <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {newsData
          .filter((i) => (activeTabId === 0 ? true : i.type === activeTabId))
          .map((i) => (
            <div
              key={i.id}
              onClick={() => {
                router.push(`/about/news/${i.id}`)
              }}
            >
              <Card className="group flex size-full cursor-pointer flex-col overflow-hidden">
                <CardHeader className="flex flex-1 flex-col space-y-4">
                  <div className="flex justify-between text-sm text-[#666666]">
                    <span>{i.createdAt}</span>
                    <span>{getNewsTypeText(i.type)}</span>
                  </div>
                  <div className="line-clamp-2 text-2xl font-medium">{i.title}</div>
                  <div className="line-clamp-2 text-sm text-[#666666]">
                    <div
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{
                        __html: i.content
                      }}
                    />
                  </div>
                </CardHeader>

                <CardContent className="relative h-[250px] overflow-hidden">
                  <NextImage
                    className="select-none object-cover transition-all sm:group-hover:scale-110"
                    src={getSrc(i.src)}
                    alt=""
                    fill
                    sizes="100vw"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  )
}
