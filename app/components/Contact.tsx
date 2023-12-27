import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="w-full">
      <div className="container relative mx-auto flex justify-between">
        <div className="flex flex-col justify-center">
          <span className="mb-8 text-2xl font-medium">如果想进一步了解产品或解决方案</span>
          <div>
            <Button
              asChild
              variant="outline"
            >
              <Link href="/waiting">预约交流</Link>
            </Button>
          </div>
        </div>

        <Image
          src="https://www.rootcloud.com/cn2023/images/nimg748Bg.png"
          alt=""
          width={400}
          height={400}
        />
        <Image
          className="absolute -top-4 right-8 animate-bounce-slight"
          src="https://www.rootcloud.com/cn2023/images/nimg79Bg.png"
          alt=""
          width={54}
          height={40}
        />
        <Image
          className="absolute right-[350px] top-1/2 animate-bounce-slight"
          src="https://www.rootcloud.com/cn2023/images/nimg79Bg.png"
          alt=""
          width={54}
          height={40}
        />
      </div>
    </div>
  )
}
