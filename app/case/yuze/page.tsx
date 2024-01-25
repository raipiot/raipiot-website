import { CaseRecord } from '@/constants/CaseRecord'

import CommonWrapper from '../components/CommonWrapper'

export const metadata = {
  title: 'raipiot - 宇泽案例'
}

export default function Page() {
  return <CommonWrapper data={CaseRecord.yuze} />
}
