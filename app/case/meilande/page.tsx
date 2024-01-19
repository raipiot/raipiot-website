import BannerArea from '@/app/components/BannerArea'
import { CaseRecord } from '@/constants/CaseRecord'

export const metadata = {
  title: 'Raipiot - 美兰德案例'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center space-y-12 sm:space-y-24">
      <BannerArea
        title={CaseRecord.meilande.name}
        subTitle={CaseRecord.meilande.intro.join('\n')}
      />
      {/* 痛点 */}
      {/* Raipiot 为企业数字化转型搭梯架桥 */}
      {/* 客户价值 */}
    </div>
  )
}
