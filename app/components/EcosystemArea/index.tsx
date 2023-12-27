import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/card'

const data = [
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' },
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' },
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' },
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' },
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' },
  { title: '阿里云', src: '/img/logo/alicloud.png', href: 'https://cn.aliyun.com/' },
  { title: 'EPICOR', src: '/img/logo/epicor.png', href: 'https://www.epicor.com/' }
]

export default function EcosystemArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-24">
        <span className="mb-10 text-3xl">共建“信任、融合、共赢”的生态体系</span>
        <div className="grid w-full grid-cols-6 justify-between gap-4">
          {data.map((i) => (
            <Link
              href={i.href}
              target="_blank"
            >
              <Card
                key={i.title}
                className="group flex items-center justify-center"
              >
                <Image
                  className="transition-all duration-300 group-hover:scale-125 group-active:scale-100"
                  src={i.src}
                  width={200}
                  height={200}
                  alt=""
                  style={{ objectFit: 'contain', width: '120px', height: '120px' }}
                />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
