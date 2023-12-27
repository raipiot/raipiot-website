import Image from 'next/image'

export default function ProductArray() {
  return (
    <div className="w-full py-24">
      <div className="relative mx-auto h-[600px] w-[1100px] text-center">
        <span className="text-3xl">产品矩阵</span>
        <Image
          src="/temp/product_array.jpg"
          alt=""
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  )
}
