import Image from 'next/image'

import { getSrc } from '@/utils'

export default function PhotoWallArea() {
  return (
    <div className="container mx-auto flex flex-col p-4 pb-12 pt-6 sm:pb-24 sm:pt-12">
      <div className="mb-8 text-center text-2xl font-medium">
        员工投公司以热情和增值绩效，公司报员工以富足和体面人生
      </div>
      <div className="mx-auto grid grid-cols-2 gap-0">
        <div className="relative h-[100px] w-full sm:h-[250px] sm:w-[540px]">
          <Image
            src={getSrc('/img/team/staff_1.jpg')}
            className="object-cover object-center shadow-md"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative h-[100px] w-full sm:h-[250px] sm:w-[540px]">
          <Image
            src={getSrc('/img/team/staff_2.jpg')}
            className="object-cover object-center shadow-md"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative h-[100px] w-full sm:h-[250px] sm:w-[540px]">
          <Image
            src={getSrc('/img/team/staff_3.jpg')}
            className="object-cover object-center shadow-md"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative h-[100px] w-full sm:h-[250px] sm:w-[540px]">
          <Image
            src={getSrc('/img/team/staff_4.jpg')}
            className="object-cover object-center shadow-md"
            alt=""
            fill
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}
