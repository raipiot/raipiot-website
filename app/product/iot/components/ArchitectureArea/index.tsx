import Image from 'next/image'

import { getSrc } from '@/utils'

export default function ArchitectureArea() {
  return (
    <div className="container mx-auto flex flex-col items-center px-4 pt-12 text-center sm:pt-24">
      <div
        id="architecture"
        className="mb-10 text-3xl font-medium"
      >
        产品架构
      </div>
      <Image
        src={getSrc('/img/banner/product_array.jpg')}
        alt=""
        priority
        sizes="100vw"
        width={0}
        height={0}
        className="h-auto w-[1080px] object-contain object-center shadow-md"
      />
    </div>
  )
}
