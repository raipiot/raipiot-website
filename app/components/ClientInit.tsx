'use client'

import { mobileAdaptor } from '@/utils'

function ClientInit() {
  useEffect(() => {
    mobileAdaptor()
  }, [])

  return null
}
export default ClientInit
