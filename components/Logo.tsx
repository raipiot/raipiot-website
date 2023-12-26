import Link from 'next/link'
import { memo } from 'react'

import { AppConfig } from '@/constants'
import { cn } from '@/utils'

interface LogoProps {
  link?: boolean
  className?: string
}

const Logo = memo((props: LogoProps) => {
  const { link, className } = props
  return (
    <>
      {link ? (
        <Link
          className={cn('flex select-none flex-col items-center', className)}
          href="/"
        >
          <span className="logo-text text-3xl font-bold tracking-tight sm:text-4xl">
            {AppConfig.appName}
          </span>
          <span className="logo-second-text text-[0.6rem] tracking-tighter">
            {AppConfig.appSlogan}
          </span>
        </Link>
      ) : (
        <div className={cn('flex select-none flex-col items-center', className)}>
          <span className="logo-text text-3xl font-bold tracking-tight sm:text-4xl">
            {AppConfig.appName}
          </span>
          <span className="logo-second-text text-[0.6rem] tracking-tighter">
            {AppConfig.appSlogan}
          </span>
        </div>
      )}
    </>
  )
})
export default Logo
