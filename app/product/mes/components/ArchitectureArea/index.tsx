import Image from 'next/image'

import { getSrc } from '@/utils'

export default function ArchitectureArea() {
  return (
    <div
      id="architecture"
      className="container mx-auto flex flex-col items-center px-4 pb-6 pt-12 text-center sm:pb-12 sm:pt-24"
    >
      <div className="mb-10 text-3xl font-medium">产品架构</div>
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
