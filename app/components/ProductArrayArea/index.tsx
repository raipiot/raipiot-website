import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { getSrc } from '@/utils'

export default function ProductArray() {
  return (
    <div className="relative w-full py-24">
      <Image
        className="-z-50"
        src={getSrc('/img/banner/product_array.jpg')}
        alt=""
        sizes="100vw"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <Link
        href="/waiting"
        className="container mx-auto text-center"
      >
        <div className="text-3xl">睿朴麟数字化综合解决方案</div>
        <div className="mx-auto mt-10 flex max-w-[1080px] select-none space-x-4">
          <div className="flex flex-1 flex-col space-y-2">
            <Card className="flex flex-col items-center space-y-2 rounded-none p-2">
              <div className="flex w-full items-center space-x-2">
                <div className="flex flex-1 flex-col items-center space-y-2">
                  <span>内部协同</span>
                  <Card className="flex w-full flex-col space-y-2 rounded-none p-2">
                    <span className="font-bold">智能制造</span>
                    <div className="flex space-x-2">
                      <Card className="flex flex-1 cursor-pointer items-center justify-center space-x-2 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                        IoT 云边一体化
                      </Card>
                      <div className="flex flex-1 flex-col space-y-2 rounded-none">
                        <Card className="cursor-pointer space-x-2 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                          生产制造
                        </Card>
                        <Card className="cursor-pointer space-x-2 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                          仓储管理
                        </Card>
                        <Card className="cursor-pointer space-x-2 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                          设备管理
                        </Card>
                        <Card className="cursor-pointer space-x-2 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                          产品PLM
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex flex-col pt-10" />

                <div className="flex h-full flex-1 flex-col items-center space-y-2">
                  <span>生态协同</span>
                  <Card className="flex h-full w-full flex-col space-y-2 rounded-none p-2">
                    <Card className="flex h-full cursor-pointer flex-col items-center justify-center space-y-1 rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                      <span className="font-bold">智能供应链协同平台“跟单猿”</span>
                      <span className="text-sm">交付计划 采购计划 物流运输</span>
                    </Card>
                    <Card className="flex h-full cursor-pointer flex-col items-center justify-center rounded-none p-2 font-bold transition-all hover:scale-105 active:scale-100">
                      数字化采购平台
                    </Card>
                  </Card>
                </div>
              </div>

              <div className="flex w-full items-center">
                <div className="flex w-full flex-col items-center space-y-2">
                  <div className="flex w-full justify-between">
                    <div />

                    <div />
                  </div>
                  <Card className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-none p-2 transition-all hover:scale-105 active:scale-100">
                    <span className="font-bold">办公自动化及内控流程管理</span>
                    <span className="text-sm">CRM HRM SRM</span>
                    <span className="text-sm">流程管理 费控管理 预算管理</span>
                  </Card>
                </div>
              </div>

              <Card className="w-full flex-1 cursor-pointer rounded-none py-6 font-bold transition-all hover:scale-105 active:scale-100">
                业财联动基石
              </Card>
            </Card>

            <div className="flex space-x-2">
              <Card className="flex flex-1 flex-col items-start space-y-2 rounded-none p-2">
                <span>灵活部署</span>
                <div className="flex w-full items-center space-x-2">
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    公有云部署
                  </Card>
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    私有化部署
                  </Card>
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    混合部署
                  </Card>
                </div>
              </Card>
              <Card className="flex flex-1 flex-col items-start space-y-2 rounded-none p-2">
                <span>内核</span>
                <div className="flex w-full items-center space-x-2">
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    大数据
                  </Card>
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    区块链
                  </Card>
                  <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none p-6 transition-all hover:scale-105 active:scale-100">
                    AI
                  </Card>
                </div>
              </Card>
            </div>
            <span className="mt-6 text-sm">
              企业数字化转型不能盲目效仿，要依据企业的行业特点、工艺特点、所处发展阶段及管理成熟度进行综合评估后拟定方案
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none px-8 py-6 transition-all hover:scale-105 active:scale-100">
                客户
              </Card>
            </div>
            <div className="flex items-center space-x-4">
              <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none px-8 py-6 transition-all hover:scale-105 active:scale-100">
                供应商
              </Card>
            </div>
            <div className="flex items-center space-x-4">
              <Card className="flex-1 cursor-pointer whitespace-nowrap rounded-none px-8 py-6 transition-all hover:scale-105 active:scale-100">
                其他资源
              </Card>
            </div>
          </div>
        </div>
        <div />
      </Link>
    </div>
  )
}
