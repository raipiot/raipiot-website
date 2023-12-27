import Image from 'next/image'

import { cn } from '@/utils'

import styles from './index.module.scss'

export default function AboutArea() {
  return (
    <div className="container flex space-x-8">
      <div className="flex flex-1 flex-col items-center space-y-8">
        <span className="text-3xl font-semibold">关于睿朴麟</span>

        <div className="px-4 indent-8 leading-10 sm:px-0">
          <p>
            苏州睿朴麟信息科技有限公司，是一家向制造企业及其供应链上下游、相关生态互补组织提供综合数字化服务的高新技术企业。公司以“解密数据，赋能决策”为使命，我们愿意为奋勇攀登的企业搭梯架桥，携手跨越产业应用与先进管理理论和数字技术间的鸿沟。
          </p>
          <p>
            睿朴麟的产品研发和解决方案设计围绕制造业广义供应链智能协同展开，既关注企业内部职能间业财联动又关注供应链生态组织间运营及发展协同，这是我们的突出特色。精益、增值导向贯穿工作始终，我们在融入了必要的物联网、大数据、人工智能、区块链等现代信息技术手段的同时，更注重实效性和经济性。我们在企业职能业务勾机关系、信息化投入、相关方协同困惑等方面做出了很多精心的设计与安排，提供数字化产品只是我们任务的一部分，更多的在于为企业带来怎样的业务变革，而这些变革必然是为企业带来增值效应、提升其竞争力的。
          </p>
          <p>
            只有更多的企业“用得起、用得好”，才是数字化这场新兴工业革命彻底成功之关键，睿朴麟是数量更广大范围内制造企业在这条长征路上的可靠伙伴。
          </p>
        </div>
      </div>
      <div className="relative my-auto hidden h-[500px] w-[500px] shrink-0 lg:flex">
        <Image
          src="https://www.hand-china.com/static/img/pageimage/company_introduction/jieshao-img.png"
          alt=""
          priority
          fill
          sizes="500px"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <div className={cn('absolute right-[17%] top-[58%]', styles.mapCircle)}>
          <span className="absolute left-4 text-nowrap">苏州（总部）</span>
        </div>
        <div className={cn('absolute right-[30%] bottom-[18%]', styles.mapCircle)}>
          <span className="absolute left-4 text-nowrap">深圳</span>
        </div>
        <div className={cn('absolute right-[39%] top-[54%]', styles.mapCircle)}>
          <span className="absolute left-4 text-nowrap">西安</span>
        </div>
      </div>
    </div>
  )
}
