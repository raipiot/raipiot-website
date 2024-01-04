import { ShieldCheckIcon, TargetIcon, TrophyIcon } from 'lucide-react'
import Image from 'next/image'

const iconProps = {
  size: 60,
  strokeWidth: 1.5
}

const cardData = [
  {
    title: '自主可控',
    icon: <TargetIcon {...iconProps} />,
    src: '/img/banner/values_1.jpg',
    description:
      '核心产品方案架构团队平均制造业工龄 20 年以上，世界 500 强、大型跨国公司、领先民营企业的管理实战经验融入自研产品，并结合管理科学演进和用户需求变化不断迭代。'
  },
  {
    title: '创新卓越',
    icon: <TrophyIcon {...iconProps} />,
    src: '/img/banner/values_2.jpg',
    description:
      '企业内部协同与供应链生态协同并举，以去中心化的增值服务为创新特色，精益思想贯穿产品与解决方案，不断引导企业走向卓越的数字化转型之路。'
  },
  {
    title: '经济可靠',
    icon: <ShieldCheckIcon {...iconProps} />,
    src: '/img/banner/values_3.jpg',
    description:
      '可提供云端部署及共享运维服务，解决大量制造企业因地域因素导致的 IT 人才匮乏和投入高昂的困惑；合作伙伴选择慎重，加之全面的安全技术架构和信息安全管理体系支撑，确保用户顺畅、安心。'
  }
]

export default function AboutCardsArea() {
  return (
    <div className="container flex flex-col space-y-8 px-4 text-white sm:flex-row sm:space-x-8 sm:space-y-0">
      {cardData.map((item) => (
        <div
          className="group relative flex min-h-[300px] flex-[1] items-center justify-center rounded-md transition-all duration-700 hover:flex-[2] sm:h-[500px]"
          key={item.title}
        >
          <Image
            src={item.src}
            alt=""
            fill
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="relative flex w-full flex-col items-center justify-center space-y-4 transition-all duration-1000 group-hover:-translate-y-10">
            {item.icon}
            <div className="text-2xl">{item.title}</div>
            <div className="h-[2px] w-6 bg-white transition-all duration-1000" />
            <div className="absolute -bottom-20 w-[500px] translate-y-20 px-12 text-center text-sm opacity-0 transition-all duration-1000 group-hover:translate-y-16 group-hover:opacity-100 sm:translate-y-96">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
