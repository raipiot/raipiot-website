import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/card'
import { getSrc } from '@/utils'

const data = [
  {
    title: '炎黄盈动',
    src: '/img/logo/action_soft.png',
    href: 'https://www.actionsoft.com.cn/',
    width: 90
  },
  {
    title: 'EPICOR',
    src: '/img/logo/epicor.png',
    href: 'https://www.epicor.com/',
    width: 140
  },
  {
    title: 'AWS',
    src: '/img/logo/aws.png',
    href: 'https://www.amazonaws.cn/',
    width: 60
  },
  {
    title: '阿里云',
    src: '/img/logo/alicloud.png',
    href: 'https://cn.aliyun.com/',
    width: 90
  },
  {
    title: '天翼云',
    src: '/img/logo/ctyun.png',
    href: 'https://www.ctyun.cn/',
    width: 90
  }
]

export default function EcosystemArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-12 sm:pb-40 sm:pt-24">
        <span className="mb-10 text-3xl font-medium">生态合作伙伴</span>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-5">
          {data.map((i) => (
            <Link
              href={i.href}
              target="_blank"
              key={i.title}
            >
              <Card
                key={i.title}
                className="group flex h-[120px] w-full items-center justify-center"
              >
                <Image
                  className="h-auto object-contain transition-all duration-300 group-hover:scale-125 group-active:scale-100"
                  src={getSrc(i.src)}
                  width={0}
                  height={0}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: i.width
                  }}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
