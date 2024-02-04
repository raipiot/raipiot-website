import type { NewsItem } from '@/types'
import { getSrc, shimmerPlaceholder } from '@/utils'

import { getNewsTypeText } from '../../../utils'

export default function BannerArea(props: NewsItem) {
  return (
    <div className="relative h-fit w-full">
      <div className="relative flex h-[450px] w-full items-center">
        <NextImage
          className="-z-50"
          src={getSrc(props.src)}
          alt=""
          sizes="100vw"
          fill
          priority
          quality={40}
          placeholder={shimmerPlaceholder(9999, 455)}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
        <div className="container m-auto flex flex-col space-y-6 px-4 text-white">
          <span className="text-4xl">{props.title}</span>
          <div className="flex space-x-4">
            <span>{getNewsTypeText(props.type)}</span>
            <span>{props.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
