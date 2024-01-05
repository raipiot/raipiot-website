import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { jobDetails } from '@/data'
import { getSrc } from '@/utils'

export default function ListArea() {
  return (
    <div className="container mx-auto mb-24 flex flex-col">
      <div className="relative mx-auto mb-24 mt-6 h-[500px] w-[1080px]">
        <Image
          src={getSrc('/img/banner/staff.jpg')}
          className="rounded-sm shadow-sm"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      <div className="mx-auto mb-24 flex max-w-[720px] flex-col space-y-4">
        <div className="mb-8 self-center text-3xl font-bold">加入我们</div>

        {jobDetails.map((jobDetail) => (
          <Link
            href={`/about/position/${jobDetail.id}`}
            key={jobDetail.id}
            className="flex cursor-pointer flex-col space-y-2 rounded-sm p-6 transition-all hover:shadow-md active:opacity-75"
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
