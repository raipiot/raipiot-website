import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getSrc } from '@/utils'

export default function ContactArea() {
  return (
    <div className="w-full">
      <div className="container relative mx-auto flex h-[300px] justify-between">
        <div className="flex flex-col justify-center">
          <span className="mb-8 text-2xl font-medium">如果想进一步了解产品或解决方案</span>
          <div>
            <Button asChild>
              <Link href="/waiting">预约交流</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src={getSrc('/img/banner/contact.png')}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-40 sm:w-[400px]"
          />
        </div>
      </div>
    </div>
  )
}
