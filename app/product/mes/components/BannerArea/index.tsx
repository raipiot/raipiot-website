import { Button } from '@/components/ui/button'
import { getSrc, shimmerPlaceholder } from '@/utils'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[450px] w-full items-center">
        <NextImage
          className="absolute left-0 top-0 -z-50"
          src={getSrc('/img/banner/mes.png')}
          alt=""
          sizes="100vw"
          fill
          priority
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">制造执行管理 MES</span>
          <div className="flex flex-col space-y-2">
            <span>
              通过提供实时的、可追溯的生产数据，帮助制造企业更加灵活、高效地运营，适应市场需求的变化，提高生产效率和质量水平
            </span>
            <span>
              采用
              IoT、云、RFID、边缘计算等互联互通技术，实现数据采集、合理排产、制程防错防漏等高水平管理
            </span>
          </div>
          <div>
            <Button
              asChild
              variant="secondary"
            >
              <NextLink href="/waiting">预约交流</NextLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
