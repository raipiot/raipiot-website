import { Card } from '@/components/ui/card'

const data = [
  {
    title: '集团多园区管控与协同',
    description:
      '满足大型跨国跨区域集团对多地园区主数据与工况数据统一管控需求，可落地专属云联邦架构部署和跨地域协同方案。'
  },
  {
    title: '集团多园区管控与协同',
    description:
      '作为原生账户体系，从源头实现对IT、OT融合数据和到工业设备属性级别的数据管控，并支持根据业务需求实现跨租户角色授权。'
  },
  {
    title: '集团多园区管控与协同',
    description:
      '满足大型跨国跨区域集团对多地园区主数据与工况数据统一管控需求，可落地专属云联邦架构部署和跨地域协同方案。'
  },
  {
    title: '集团多园区管控与协同',
    description:
      '满足大型跨国跨区域集团对多地园区主数据与工况数据统一管控需求，可落地专属云联邦架构部署和跨地域协同方案。'
  },
  {
    title: '集团多园区管控与协同',
    description:
      '满足大型跨国跨区域集团对多地园区主数据与工况数据统一管控需求，可落地专属云联邦架构部署和跨地域协同方案。'
  },
  {
    title: '集团多园区管控与协同',
    description:
      '满足大型跨国跨区域集团对多地园区主数据与工况数据统一管控需求，可落地专属云联邦架构部署和跨地域协同方案。'
  }
]

export default function AdvantageArea() {
  return (
    <div className="container mx-auto space-y-12 text-center">
      <div className="text-3xl font-semibold">产品优势</div>
      <div className="grid grid-cols-3 gap-8">
        {data.map((i) => (
          <Card className="flex flex-col space-y-4 p-4">
            <span className="text-lg">{i.title}</span>
            <span className="text-sm">{i.description}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
