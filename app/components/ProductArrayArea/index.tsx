import { CloudFogIcon, CloudIcon, CloudyIcon, ServerCogIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { Card } from '@/components/ui/card'

interface CardItemProps {
  title?: string
  icon?: ReactNode
}

function CardItem(props: CardItemProps) {
  return (
    <Link href="/waiting">
      <Card className="flex h-full cursor-pointer items-center justify-center space-x-2 rounded-none p-2 text-base transition-all hover:scale-105 active:scale-100">
        <span>{props.icon}</span>
        <span>{props.title}</span>
      </Card>
    </Link>
  )
}

export default function ProductArray() {
  return (
    <div className="w-full py-24">
      <div className="container mx-auto text-center">
        <span className="text-3xl">产品矩阵</span>
        <div className="mx-auto mt-10 grid max-w-[1080px] select-none grid-rows-7 gap-4">
          <div className="grid grid-cols-1">
            <CardItem title="经营管理" />
          </div>
          <div className="row-span-2 grid grid-cols-5 gap-5">
            <CardItem title="生产制造" />
            <CardItem title="物流管理" />
            <CardItem title="仓储管理" />
            <CardItem title="设备管理" />
            <CardItem title="产品 PLM" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <CardItem title="业财联通基石 ERP" />
            <CardItem title="办公自动化及内控 BPM" />
          </div>
          <div className="row-span-2 grid grid-cols-3 gap-5">
            <CardItem title="智能供应链协同平台“跟单猿”" />
            <CardItem title="数字化采购平台" />
            <CardItem title="IoT 云边一体化" />
          </div>
          <div className="grid grid-cols-4 gap-5">
            <CardItem
              title="公有云"
              icon={<CloudIcon size={16} />}
            />
            <CardItem
              title="私有云"
              icon={<CloudFogIcon size={16} />}
            />
            <CardItem
              title="混合云"
              icon={<CloudyIcon size={16} />}
            />
            <CardItem
              title="本地部署"
              icon={<ServerCogIcon size={16} />}
            />
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}
