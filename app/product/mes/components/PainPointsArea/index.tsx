import { Card } from '@/components/ui/card'

const data = [
  {
    title: '信息不透明',
    content:
      '缺乏主数据管理导致企业信息流程不透明，增加生产中的不确定性。多样性项目导致物料配送不透明，增加了错装物料的风险。'
  },
  {
    title: '生产流程碎片化',
    content:
      '各生产环节（装配、采购、仓库、零件生产）之间沟通协同不畅，导致生产流程碎片化，难以实现整体优化。'
  },
  {
    title: '数字化滞后',
    content:
      '大部分企业依赖人工纸质统计，缺乏现代化的数字化系统，数字化滞后。客户自动化程度差异大，导致整体信息化程度不高。'
  },
  {
    title: '管理粗放',
    content:
      '精细化管理不足导致订单交付延迟，损害客户关系；缺乏成本精细化管理，导致经济浪费和管理混乱；精细化库存管理不足，导致库存积压和周转率低下。'
  },
  {
    title: '技术滞后',
    content: '部分企业使用的MES系统过时，技术滞后影响生产效率。'
  },
  {
    title: '数据安全风险',
    content: '缺乏安全措施可能导致生产数据泄露，存在潜在的合规性风险。'
  }
]

export default function PainPointArea() {
  return (
    <div
      id="pain-points"
      className="w-full"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 sm:py-24">
        <div className="mb-10 text-center text-3xl font-medium">企业痛点</div>
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
