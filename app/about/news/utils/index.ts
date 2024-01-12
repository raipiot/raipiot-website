import { NewsType } from '@/enums'

export const getNewsTypeText = (type: number) => {
  switch (type) {
    case NewsType.ALL:
      return '全部'
    case NewsType.DYNAMICS:
      return '公司动态'
    case NewsType.QLY:
      return '麒麟院'
    case NewsType.NEWS:
      return '行业新闻'
    case NewsType.POLICY:
      return '政策解读'
    default:
      return ''
  }
}
