import { getSrc } from '@/utils'

export default function ArchitectureArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center sm:py-24">
        <div
          id="architecture"
          className="mb-10 text-3xl font-medium"
        >
          产品架构
        </div>
        <NextImage
          className="h-auto w-[1080px] select-none object-contain object-center shadow-md"
          src={getSrc('/img/product/mes/arch.png')}
          alt=""
          priority
          sizes="100vw"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}
