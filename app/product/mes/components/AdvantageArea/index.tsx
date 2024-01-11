import { Card } from '@/components/ui/card'

const data = [
  {
    title: '实时监控和反馈',
    content: '提供实时生产数据监控，帮助企业随时了解生产过程，及时发现问题并采取纠正措施。'
  },
  {
    title: '生产计划优化',
    content: '能够优化生产计划，确保生产资源的最佳利用，提高生产效率，减少生产成本。'
  },
  {
    title: '质量控制与追溯',
    content: '系统支持质量管理和追溯性，确保产品符合质量标准，并提供追溯功能以追踪产品的生产历史。'
  },
  {
    title: '库存管理和优化',
    content: '有助于实现精细化库存管理，减少库存积压，提高库存周转率，降低存储成本。'
  },
  {
    title: '协同工作流程',
    content: '系统整合各生产环节，促进协同工作流程，提高团队合作效率，减少沟通障碍。'
  },
  {
    title: '可定制性和灵活性',
    content:
      '系统通常具有一定的可定制性，能够根据企业特定的需求进行调整和配置，以满足不同行业和企业的要求。'
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
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
