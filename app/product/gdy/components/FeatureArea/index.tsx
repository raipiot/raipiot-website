import Image from 'next/image'

import { cn } from '@/utils'

const data = [
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: false,
    bgColor: '#f6f7f8'
  },
  {
    title: '接入与建模',
    description:
      '通过物模型表示物理世界的实际工业设备，将海量的设备运行实时数据准确稳定接入至云平台，并进行数据治理。用户可以远程完成工况 监控、指令下发、接收报警等操作。',
    src: '/img/banner/product_array.jpg',
    reverse: true
  }
]

export default function FeatureArea() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col space-y-4 text-center">
        <span className="text-3xl font-semibold">产品功能</span>
        <span>多年工业领域实战经验，专注打造工业互联网操作系统</span>
      </div>

      {data.map((i) => (
        <div style={{ backgroundColor: i.bgColor }}>
          <div
            className={cn('flex py-12 w-full container mx-auto', i.reverse && 'flex-row-reverse')}
          >
            <div className="relative h-[400px] flex-1">
              <Image
                src={i.src}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-sm"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center p-8">
              <span>{i.title}</span>
              <span>{i.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
