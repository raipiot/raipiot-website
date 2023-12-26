'use client'

import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'
import { memo } from 'react'

import { cn } from '@/utils'

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  > {
  outline?: boolean
  inline?: boolean
  size?: 'sm' | 'md'
  rounded?: boolean
  link?: boolean
  href?: string
}

const Button = memo((props: Props) => {
  const { children, className, outline, inline, size = 'md', rounded, link, href, ...rest } = props
  const router = useRouter()

  return (
    <button
      type="button"
      {...rest}
      className={cn(
        size === 'sm' && 'text-sm px-5 py-1.5',
        size === 'md' && 'text-base py-3 px-7',
        outline ? 'bg-transparent' : 'bg-white text-black',
        inline && 'w-fit',
        rounded && 'rounded-full w-fit h-fit px-1.5',
        'active:scale-90 scale-100 text-center outline-none tracking-wide border border-gray-200 rounded-3xl transition-all hover:opacity-90 opacity-100 font-semibold',
        className
      )}
      {...(link &&
        href && {
          onClick: () => router.push(href)
        })}
    >
      {children}
    </button>
  )
})
export default Button
