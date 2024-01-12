import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { jobDetails } from '@/data'

export default function JoinUsArea() {
  return (
    <div
      id="join-us"
      className="container mx-auto mb-12 flex max-w-[720px] flex-col space-y-4 sm:mb-24"
    >
      <div className="mb-8 self-center text-3xl font-medium">加入我们</div>
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
  )
}
