import { CaseRecord } from '@/constants/CaseRecord'

import CommonWrapper from '../components/CommonWrapper'

export const metadata = {
  title: CaseRecord.yuze.name
}

export default function Page() {
  return <CommonWrapper data={CaseRecord.yuze} />
}
