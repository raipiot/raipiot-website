import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-[2000px]">
      <Image
        src="/img/qrcode.png"
        alt=""
        width={300}
        height={300}
      />
    </main>
  )
}
