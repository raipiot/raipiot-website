import { Card } from '@/components/ui/card'

const data = [
  {
    title: '仓储管理产品化、精细化',
    content:
      '从⼊库、出库到库内作业，提供全⾯仓储解决⽅案提供全⾯策略配置、报表分析、看板图形化、⼤屏可视化。'
  },
  {
    title: 'PDA/RF ⽆纸化作业',
    content:
      '通过 PDA 扫码、RF ⾃动化识别技术，⽆纸化作业，提⾼数据采集的准确性和效率。⽀持⾃动化数据采集，减少⼈为错误，提⾼作业效率，降低运营成本。'
  },
  {
    title: '⾼度适⽤性、⾼度灵活性',
    content:
      '流程可灵活配置，适⽤不同⾏业和市场需求，更好地满⾜客户个性化需求。丰富的⾃定义功能，⽆需或仅需少量⼆次开发即可满⾜特定场景要求。'
  },
  {
    title: '便捷对接三⽅业务系统',
    content:
      '⽆缝整合内部TMS产品，可实现订单及供应链库存可视化。⾼效对接ERP、MES、SRM等业务系统，实现拓展多场景业务协同需求。'
  }
]

export default function AdvantageArea() {
  return (
    <div
      id="advantage"
      className="w-full bg-[#f7f7fa]"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-24">
        <div className="mb-10 text-3xl font-medium">产品优势</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {data.map((i) => (
            <Card
              key={i.title}
              className="flex flex-col items-center space-y-2 p-6 text-center"
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
