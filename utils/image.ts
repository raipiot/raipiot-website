import { AppConfig } from '@/constants'

export const getSrc = (url: string, local?: boolean) => (local ? url : AppConfig.ossUrl + url)
