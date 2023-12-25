import { memo, type PropsWithChildren } from 'react'

import { cn } from '@/utils'

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  animated?: boolean
  bordered?: boolean
  shadow?: boolean
}

const Card = memo((props: Props) => {
  const { animated = true, bordered, shadow, children, ...rest } = props

  return (
    <div
      {...rest}
      className={cn(
        animated &&
          'hover:-translate-y-16 hover:pb-16 hover:-mb-16 transition-all duration-500 group'
      )}
    >
      <div
        className={cn(
          'p-8 bg-white',
          animated && 'rounded-3xl group-hover:border group-hover:shadow-2xl',
          bordered && 'border p-[31px]',
          shadow && 'shadow',
          props.className
        )}
      >
        {children}
      </div>
    </div>
  )
})
export default Card
