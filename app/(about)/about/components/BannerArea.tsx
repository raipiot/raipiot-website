'use client'

import Banner from '@/components/Banner'
import Button from '@/components/Button'

export default function BannerArea() {
  return (
    <div className="relative h-fit w-full">
      <Banner
        bgSrc="https://i0.wp.com/blog.particle.io/wp-content/uploads/2019/06/bg.jpg"
        title="为奋勇攀登的组织搭梯架桥"
        button={
          <Button
            size="md"
            link
            href="/waiting"
          >
            预约交流
          </Button>
        }
      />
    </div>
  )
}
