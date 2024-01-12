import type { NewsType } from '@/enums'

export interface NewsItem {
  id: string
  title: string
  content: string
  createdAt: string
  type: NewsType
  src: string
}
