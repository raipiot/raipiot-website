import Image from 'next/image'

import { Card } from '@/components/ui/card'
import { getSrc } from '@/utils'

export default function ProductArray() {
  return (
    <div className="relative w-full py-12 sm:py-24">
      <Image
        className="-z-50 opacity-30"
        src={getSrc('/img/banner/product_array.jpg')}
        alt=""
        sizes="100vw"
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black opacity-5" />
      <div className="container mx-auto flex flex-col px-4 text-center">
        <span className="text-2xl sm:text-3xl">睿朴麟数字化综合解决方案</span>
        <span className="mt-6 text-sm sm:text-base">
          企业数字化转型不能盲目效仿，要依据企业的行业特点、工艺特点、所处发展阶段及管理成熟度进行综合评估后拟定方案
        </span>

        <div className="mt-6 flex select-none flex-col space-y-2">
          <Card className="flex items-center space-x-2 rounded-none p-2">
            <span className="w-4 font-bold sm:basis-1/4">管理水平评估方案</span>
            <div className="flex grow flex-col gap-2 sm:basis-3/4 sm:flex-row">
              <Card className="flex flex-1 flex-col rounded-none p-2">
                <span>智能制造能力成熟度模型</span>
                <span className="text-sm">GB/T 39117-2020</span>
              </Card>
              <Card className="flex flex-1 flex-col rounded-none p-2">
                <span>数据中心精益六西格玛应用评价准则</span>
                <span className="text-sm">GB/T 37726-2019</span>
              </Card>
              <Card className="flex flex-1 flex-col rounded-none p-2">
                <span>流程再造工具</span>
                <span className="text-sm">迈克尔哈默 PEMM 框架</span>
              </Card>
            </div>
          </Card>

          <Card className="flex rounded-none p-2">
            <span className="mr-2 w-4 self-center font-bold sm:w-8 sm:p-2">
              企业全面数字化解决方案
            </span>
            <div className="flex grow flex-col space-y-2">
              <div className="flex grow space-x-2">
                <div className="flex flex-1 flex-col space-y-2">
                  <span className="font-bold">生态协同</span>
                  <Card className="flex flex-col space-y-2 rounded-none p-2">
                    <span className="font-bold">上下游商业协同</span>
                    <span className="text-sm">基于 BPM 低代码开发</span>
                    <Card className="rounded-none p-2 text-sm sm:text-base">SRM</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">CRM</Card>
                  </Card>

                  <Card className="space-y-2 rounded-none p-2">
                    <span className="font-bold">上下游交付协同</span>
                    <Card className="rounded-none p-2 text-sm sm:text-base">
                      智能交付协同平台 ——— “跟单猿”
                    </Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">企业 TMS</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">承运人 OMS</Card>
                  </Card>
                </div>

                <div className="flex flex-1 flex-col space-y-2">
                  <span className="font-bold">价值创造</span>
                  <Card className="flex flex-1 flex-col space-y-2 rounded-none p-2">
                    <span className="font-bold">制造精益化管理</span>
                    <Card className="rounded-none p-2 text-sm sm:text-base">MES</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">WMS</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">PLM</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">智造软件系列</Card>
                  </Card>
                  <Card className="flex flex-col space-y-2 rounded-none p-2">
                    <span className="font-bold">工业设备数据采集与应用</span>
                    <Card className="rounded-none p-2 text-sm sm:text-base">IoT云边一体化平台</Card>
                  </Card>
                </div>

                <div className="flex flex-1 flex-col space-y-2">
                  <span className="font-bold">内部协同</span>
                  <Card className="flex flex-1 flex-col space-y-2 rounded-none p-2">
                    <span className="font-bold">集成化办公管理平台</span>
                    <span className="text-sm">基于BPM低代码开发</span>
                    <Card className="rounded-none p-2 text-sm sm:text-base">HRM</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">费控管理</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">项目管理</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">流程管理</Card>
                    <Card className="rounded-none p-2 text-sm sm:text-base">预算管理</Card>
                  </Card>
                </div>
              </div>

              <Card className="flex items-center space-x-2 rounded-none p-2">
                <span className="px-1 font-bold">业财联动基石</span>
                <Card className="flex-1 grow rounded-none p-2 text-sm sm:text-base">ERP</Card>
              </Card>
            </div>
          </Card>

          <div className="flex">
            <Card className="flex flex-1 items-center space-x-2 rounded-none p-2">
              <span className="w-4 font-bold sm:basis-1/4">灵活部署方案</span>
              <div className="flex grow flex-col gap-2 sm:basis-3/4 sm:flex-row">
                <Card className="flex-1 rounded-none p-2">公有云部署</Card>
                <Card className="flex-1 rounded-none p-2">私有云部署</Card>
                <Card className="flex-1 rounded-none p-2">混合部署</Card>
              </div>
            </Card>

            <Card className="ml-1 flex flex-1 items-center space-x-2 rounded-none p-2">
              <span className="w-4 font-bold sm:basis-1/4">技术融合方案</span>
              <div className="flex grow flex-col gap-2 sm:basis-3/4 sm:flex-row">
                <Card className="flex-1 rounded-none p-2">大数据建模</Card>
                <Card className="flex-1 rounded-none p-2">区块链技术</Card>
                <Card className="flex-1 rounded-none p-2">AI</Card>
              </div>
            </Card>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}
