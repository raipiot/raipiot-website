import { getSrc } from '@/utils'

export default function ArchitectureArea() {
  return (
    <div
      id="architecture"
      className="w-full bg-[#f7f7fa]"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-24">
        <div className="mb-10 text-3xl font-medium">产品架构</div>
        <NextImage
          src={getSrc('/img/gdy/product_array.jpg')}
          alt=""
          priority
          sizes="100vw"
          width={0}
          height={0}
          className="h-auto w-[1080px] object-contain object-center shadow-md"
        />
      </div>
    </div>
  )
}
