'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import { cn, getSrc } from '@/utils'

const data = [
  {
    index: '01',
    title: '跨系统集成',
    description: `与 ERP/CRM 跨系统集成，对接发货通知、RMA 等形成运输需求。
与客户 SRM 跨系统集成，对接形成客户送货单。
提卸货计划、司机手机终端提卸货信息二维码与 OA 跨系统集成，实现外来车辆进、出门管理。`,
    src: '/img/product/gdy/1.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '02',
    title: '快捷录入',
    description: '复制历史单据、Excel 模版批量导入，手工录单更快捷。',
    src: '/img/product/gdy/2.png',
    reverse: true
  },
  {
    index: '03',
    title: '柔性运输计划',
    description: `货等车：先有运输需求再下运单订车/舱。
车等货：通过预测下运单，按实际装箱单后补运输需求，以成本换时间。
`,
    src: '/img/product/gdy/3.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '04',
    title: '运输需求拆合 + 多提多卸',
    description:
      '相同或相近收/发货地的多个运输需求整合配载至同一车，多提多卸，让您的配载“密不透风”。',
    src: '/img/product/gdy/4.png',
    reverse: true
  },
  {
    index: '05',
    title: '一单多车 + 批量配载',
    description: '一次配载批量配载多车，提升效率。',
    src: '/img/product/gdy/5.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '06',
    title: '多运输方式',
    description: `支持陆（整车 FTL、零担 LTL）、海（整柜 FCL、拼柜 LCL）、空、铁、速运运输方式。
统一速运平台：支持德邦、跨越、顺丰、京东、中通、百世、顺心捷达等。`,
    src: '/img/product/gdy/6.png',
    reverse: true
  },
  {
    index: '07',
    title: '多式联运 + 分段运输',
    description:
      '将复杂的运输需求拆分成段委托不同承运方，拥有全局视野，支撑跨承运方的运输计划协同。',
    src: '/img/product/gdy/7.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '08',
    title: '地理定位技术与运输轨迹',
    description: `整车和零担（即使频繁更换车辆和司机）的运输轨迹轻松采集，使运输过程更透明，降低沟通成本。
电子围栏自动触发货车提卸货等节点。
`,
    src: '/img/product/gdy/8.png',
    reverse: true
  },
  {
    index: '09',
    title: '监控看板',
    description: '在途监控看板展示当前任务和在途异常。',
    src: '/img/product/gdy/9.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '10',
    title: '异常报警',
    description: '提货、送货迟到报警、人车分离报警、免堆/免箱超期报警助力事中管理，降低风险。',
    src: '/img/product/gdy/10.png',
    reverse: true
  },
  {
    index: '11',
    title: '签收管理',
    description: `规范司机或承运方签收单上传行为。
签收单台账和查询，签收单上传率统计。`,
    src: '/img/product/gdy/11.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '12',
    title: '运费价格是自动计费的依据，支持多种模式的运费价格。',
    description: '提货、送货迟到报警、人车分离报警、免堆/免箱超期报警助力事中管理，降低风险。',
    src: '/img/product/gdy/12.png',
    reverse: true
  },
  {
    index: '13',
    title: '运费预估引擎助力决策',
    description: `最优速运推荐：集成的众多速运都是您的供应资源，强大的计算引擎预估运费，推荐最优速运。
最优承运方推荐：依据运费价格自动计算运费并决策当次发货的价格最优承运方。`,
    src: '/img/product/gdy/13.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '14',
    title: '业财一体/自动计费',
    description: `隐性运费显性化；计费、账单自动化；运费分摊精细化。
隐性成本显性化：规范异常运费，隐性成本无所遁形。
计费、账单自动化：自动生成运输费用和对账单，对账效率提升显著。
运费按销售订单别、产品别分摊。`,
    src: '/img/product/gdy/14.png',
    reverse: true
  },
  {
    index: '15',
    title: '商业智能分析',
    description: '运营分析与在途监控看板助力决策和运营管理。',
    src: '/img/product/gdy/15.png',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    index: '16',
    title: '报表中心',
    description: '个性化报表满足业务管理与数据分析。',
    src: '/img/product/gdy/16.png',
    reverse: true
  }
]

export default function FeatureArea() {
  const imgRefs = useRef<HTMLDivElement[]>([])

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)

  //   const ctx = gsap.context(() => {
  //     imgRefs.current.forEach((img) => {
  //       gsap.from(img, {
  //         duration: 500,
  //         autoAlpha: 0,
  //         y: 150,
  //         opacity: 0,
  //         ease: 'expo.in',
  //         scrollTrigger: {
  //           trigger: img,
  //           start: 'top bottom',
  //           end: 'bottom top',
  //           toggleActions: 'play none none reset',
  //           scrub: true
  //         }
  //       })
  //     })
  //   })
  //   return () => {
  //     ctx.revert()
  //   }
  // }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !imgRefs.current.includes(el)) {
      imgRefs.current.push(el)
    }
  }

  return (
    <div
      id="feature"
      className="w-full py-6 sm:py-12"
    >
      <div className="container mx-auto flex flex-col space-y-4 text-center">
        <span className="mb-10 text-3xl font-medium">产品功能</span>
      </div>

      {data.map((i, index) => (
        <div
          style={{ backgroundColor: i.bgColor }}
          key={index}
          className="w-full"
        >
          <div
            className={cn(
              'flex flex-col sm:flex-row w-full container mx-auto px-4 py-12',
              i.reverse && 'sm:flex-row-reverse'
            )}
          >
            <div
              className="relative h-[200px] sm:h-[350px] sm:flex-1"
              ref={addToRefs}
            >
              <Image
                src={getSrc(i.src)}
                alt=""
                fill
                className="select-none rounded-sm object-cover shadow-lg"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-2 pt-8 sm:items-start sm:space-y-4 sm:p-8">
              <span className="bg-gradient-to-b from-[#333333] to-[#dddddd] bg-clip-text text-6xl text-transparent">
                {i.index}
              </span>
              <span className="text-xl font-medium">{i.title}</span>
              <span className="whitespace-pre-wrap text-sm leading-8 text-[#666666]">
                {i.description}
              </span>
              <div>
                <Button
                  asChild
                  variant="outline"
                >
                  <Link href="/waiting">立即咨询</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
