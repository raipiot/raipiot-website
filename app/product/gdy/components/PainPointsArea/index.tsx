import { Card } from '@/components/ui/card'

const data = [
  {
    title: '信息化程度不均衡',
    content: '信息化建设预算有限，人才不足。司机车辆管理，在途管理在常见 ERP 类软件难实现。'
  },
  {
    title: '多方信息协同不对称',
    content: '交付信息波动大，影响企业生产节奏。纸质单据多，过程管控信息不透明。'
  },
  {
    title: '物流降本乏力',
    content: '单个企业通过竞标获得的运价下降空间有限。'
  },
  {
    title: '上下游协同方难管理',
    content: '行业需求链信息不透明，车辆与货物状态不透明。'
  }
]

export default function PainPointArea() {
  return (
    <div
      id="pain-points"
      className="w-full"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-16 sm:py-36">
        <div className="mb-10 text-center text-3xl font-medium">行业痛点</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
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
