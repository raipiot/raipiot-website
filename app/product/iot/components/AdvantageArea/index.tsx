import { Card } from '@/components/ui/card'

const data = [
  {
    title: '⼯业协议全⾯覆盖',
    content: '⽀持各种⼯业通信协议快速接⼊，兼容多种品牌设备控制器、传感器、PLC的数据采集。'
  },
  {
    title: '⾃主研发、可定制化',
    content:
      '团队从零开始独⽴⾃研产品，所有服务组件完全可控。拥有⾼⾃由度的定制化⼆次开发能⼒，⽀持各种需求迭代场景。'
  },
  {
    title: '⾼性能、低成本',
    content:
      '设计了⾼性能且低资源消耗的技术⽅案，降低系统复杂度和运⾏成本。行业典型业务应⽤场景经验，采⽤成本低⽅案成熟。'
  },
  {
    title: '全⽅位数据应⽤场景',
    content:
      '开放能⼒丰富，便捷对接团队⾃研业务系统以及三⽅业务平台。数据链路透明可控，成熟的数据分析解决⽅案'
  }
]

export default function AdvantageArea() {
  return (
    <div
      id="advantage"
      className="w-full"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-24">
        <div className="mb-10 text-3xl font-medium">产品优势</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {data.map((i) => (
            <Card
              key={i.title}
              className="flex h-40 flex-col items-center space-y-2 p-6 text-center"
            >
              <span className="text-lg">{i.title}</span>
              <p className="flex flex-1 items-center text-sm">{i.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
