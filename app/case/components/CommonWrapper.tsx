import BannerArea from '@/app/components/BannerArea'
import SubNav from '@/components/SubNav'

import ClienteleValue from './ClienteleValue'
import CoreWorth from './CoreWorth'
import PainPointArea from './PainPoints'
import RaipiotFeature from './RaipiotFeature'
import SolutionProcess from './SolutionProcess'

interface Props {
  data: {
    intro: string[]
    name: string
    EnterpriseDevelopmentPainPoints: string[]
    serviceBridge: string[]
    clienteleValue: string[]
    route: string
  }
}
export default function CommonWrapper({
  data: { intro, name, EnterpriseDevelopmentPainPoints, serviceBridge, clienteleValue }
}: Props) {
  return (
    <div className="flex flex-col items-center">
      {/* Banner 企业介绍 */}
      <BannerArea
        title={name}
        subTitle={
          <div>
            {intro.map((i, idx) => (
              <div
                className="text-xl"
                key={idx}
              >
                {i}
              </div>
            ))}
          </div>
        }
      />
      <SubNav
        data={[
          { title: '核心价值', id: 'core-worth' },
          {
            title: '数字化方案定制',
            id: 'solution-progress'
          },
          { title: 'raipiot 赋能', id: 'raipiot-feature' },
          { title: '企业痛点', id: 'pain-points' },
          { title: '客户价值', id: 'clientele-value' }
        ]}
      />
      <CoreWorth />
      <SolutionProcess />

      {/* Raipiot 为企业数字化转型搭梯架桥 */}
      <RaipiotFeature intro={serviceBridge} />
      {/* 痛点 */}
      <PainPointArea items={EnterpriseDevelopmentPainPoints} />
      {/* 客户价值 */}
      <ClienteleValue values={clienteleValue} />
    </div>
  )
}
