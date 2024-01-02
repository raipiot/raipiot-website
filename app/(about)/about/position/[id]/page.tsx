import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { jobDetails } from '@/data'
import { cn } from '@/utils'

import styles from './index.module.scss'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = jobDetails.find((jobDetail) => jobDetail.id === params.id)!
  return {
    title: `${data.title} | 岗位信息`
  }
}

export default function Page({ params }: Props) {
  const data = jobDetails.find((jobDetail) => jobDetail.id === params.id)
  if (!data) {
    redirect('/404')
  }
  return (
    <div className="container mx-auto max-w-[780px] py-4">
      <Card className="flex flex-col p-6">
        <span className="mb-3 text-3xl">{data.title}</span>
        <div className="flex text-sm text-[#999999]">
          <span>{data.location}</span>
          {data.createdAt && (
            <>
              <Separator
                orientation="vertical"
                className="mx-2 h-auto"
              />
              <span>{data.createdAt}</span>
            </>
          )}
        </div>

        {data.departmentResponsibilities && (
          <div className="mt-6">
            <span className={cn(styles.headingText, 'relative pl-2 text-lg')}>部门职责</span>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#999999]">
              {data.departmentResponsibilities}
            </p>
          </div>
        )}

        {data.jobResponsibilities && (
          <div className="mt-6">
            <span className={cn(styles.headingText, 'relative pl-2 text-lg')}>岗位职责</span>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#999999]">
              {data.jobResponsibilities}
            </p>
          </div>
        )}

        {data.jobRequirements && (
          <div className="mt-6">
            <span className={cn(styles.headingText, 'relative pl-2 text-lg')}>岗位要求</span>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-[#999999]">
              {data.jobRequirements}
            </p>
          </div>
        )}

        <div>
          <Button className="mt-4 px-8">投递</Button>
        </div>
      </Card>
    </div>
  )
}
