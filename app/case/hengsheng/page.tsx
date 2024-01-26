import { CaseRecord } from '@/constants/CaseRecord'

import CommonWrapper from '../components/CommonWrapper'

export const metadata = {
  title: CaseRecord.hengsheng.name
}

export default function Page() {
  return <CommonWrapper data={CaseRecord.hengsheng} />
}
