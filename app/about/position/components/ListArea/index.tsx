import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { jobDetails } from '@/data'
import { getSrc } from '@/utils'

export default function ListArea() {
  return (
    <div className="container mx-auto mb-12 flex flex-col p-4 sm:mb-24">
      <div className="relative mx-auto mb-12 mt-6 h-[200px] w-full sm:mb-24 sm:h-[500px] sm:w-[1080px]">
        <Image
          src={getSrc('/img/banner/staff.jpg')}
          className="rounded-sm object-cover object-center shadow-sm"
          alt=""
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto mb-12 flex max-w-[720px] flex-col space-y-4 sm:mb-24">
        <div className="mb-8 self-center text-3xl font-bold">加入我们</div>

        {jobDetails.map((jobDetail) => (
          <Link
            href={`/about/position/${jobDetail.id}`}
            key={jobDetail.id}
            className="flex cursor-pointer flex-col space-y-2 rounded-sm py-4 transition-all active:opacity-75 sm:p-6 hover:sm:shadow-md"
          >
            <span className="text-xl font-semibold">{jobDetail.title}</span>
            <div className="flex justify-between space-x-4 text-sm text-[#646a73]">
              <span> {jobDetail.location && <>工作地点：{jobDetail.location}</>}</span>
              {jobDetail.createdAt && <span className="">发布时间：{jobDetail.createdAt}</span>}
            </div>
            <Separator />
            <p className="line-clamp-2 text-sm text-[#8f959e]">{jobDetail.jobResponsibilities}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
