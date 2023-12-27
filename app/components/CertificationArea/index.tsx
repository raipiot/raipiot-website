import Image from 'next/image'

const data = [
  {
    title: '高新技术企业',
    src: 'http://www.iso9001-sz.com/aiupl/allimg/210710/2-210G01434430-L.png'
  },
  {
    title: '双软企业',
    src: 'http://www.iso9001-sz.com/aiupl/allimg/210710/2-210G01435070-L.jpg'
  },
  {
    title: 'ISO/IEC 20000-1、ISO/IEC 27001 认证',
    src: 'http://www.iso9001-sz.com/aiupl/allimg/210620/2-2106201F0040-L.jpg'
  },
  {
    title: 'ISO9001',
    src: 'http://www.iso9001-sz.com/aiupl/allimg/210620/2-2106201AU90-L.png'
  },
  {
    title: 'GB/T 22080-2016 认证',
    src: 'https://p1.itc.cn/images01/20230523/9bc5f52c90fe444e8ffd75eaec3f5c39.png'
  }
]

export default function CertificationArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-24">
        <span className="mb-10 text-3xl">权威资质</span>
        <div className="flex w-full justify-between">
          {data.map((i) => (
            <div
              key={i.title}
              className="flex flex-col items-center space-y-8 text-center"
            >
              <Image
                src={i.src}
                width={300}
                height={300}
                alt=""
                style={{ objectFit: 'contain', width: '280px', height: '120px' }}
              />
              <span className="text-nowrap">{i.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
