import Image from 'next/image'

const data = [
  {
    title: '国家级高新技术企业',
    src: '/img/cert/high_tech_enterprise.png'
  },
  {
    title: '双软企业',
    src: '/img/cert/csee.png'
  },
  {
    title: 'ISO/IEC 20000-1、ISO/IEC 27001 认证',
    src: '/img/cert/iso20000_cert.png'
  },
  {
    title: 'ISO9001',
    src: '/img/cert/iso9001_cert.png'
  },
  {
    title: 'GB/T 22080-2016 认证',
    src: '/img/cert/cnas.png'
  }
]

export default function CertificationArea() {
  return (
    <div className="w-full bg-[#f7f7fa]">
      <div className="container mx-auto flex flex-col items-center py-24">
        <span className="mb-10 text-3xl">荣誉资质</span>
        <div className="flex w-full justify-between">
          {data.map((i) => (
            <div
              key={i.title}
              className="flex flex-1 flex-col items-center space-y-8 text-center"
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
