import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn, getSrc } from '@/utils'

const data = [
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  }
]

export default function FeatureArea() {
  return (
    <div
      id="feature"
      className="w-full pt-12 sm:pt-24"
    >
      <div className="container mx-auto flex flex-col space-y-4 text-center">
        <span className="mb-10 text-3xl font-medium">产品功能</span>
      </div>

      {data.map((i, index) => (
        <div
          style={{ backgroundColor: i.bgColor }}
          key={index}
        >
          <div
            className={cn('flex py-12 w-full container mx-auto', i.reverse && 'flex-row-reverse')}
          >
            <div className="relative h-[350px] flex-1">
              <Image
                src={getSrc(i.src)}
                alt=""
                fill
                className="rounded-sm object-cover shadow-md"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-8">
              <span className="text-xl font-medium">{i.title}</span>
              <span className="text-sm leading-8 text-[#666666]">{i.description}</span>
              <Button
                asChild
                variant="outline"
              >
                <Link href="/waiting">立即咨询</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
