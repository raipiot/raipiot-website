import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import React, { memo, useState } from 'react'

import { cn } from '@/utils'

interface DropDownItem {
  text?: string
  href?: string
}

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > {
  text?: string
  href?: string
  list?: DropDownItem[]
}

const Dropdown = memo((props: Props) => {
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState(false)
  const { text, list, href, ...rest } = props

  return (
    <div
      {...rest}
      className="relative -mb-8 pb-8"
      onMouseOver={() => setShow(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseOut={() => setShow(false)}
    >
      {href ? (
        <Link
          href={href}
          className="rounded-3xl font-medium transition-all"
        >
          {text}
        </Link>
      ) : (
        <label
          className={cn(
            'rounded-3xl font-medium transition-all',
            Array.isArray(list) && list.length > 0 && 'cursor-pointer'
          )}
        >
          {text}
        </label>
      )}
      {list && list.length > 0 && (
        <ul
          className={cn(
            'absolute -bottom-2 -translate-x-1/2 left-1/2 z-[1] w-fit translate-y-full space-y-1 rounded-md bg-white p-2 transition-all',
            // eslint-disable-next-line quotes
            "after:content-[''] after:absolute after:border-8 after:border-transparent after:border-b-white after:left-1/2 after:-translate-x-1/2 after:bottom-full after:border-solid",
            show || hover ? 'visible opacity-100' : 'invisible opacity-0'
          )}
          style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        >
          {list.map((item, index) => (
            <li
              key={index}
              className="w-full whitespace-nowrap rounded-lg p-2 transition-all hover:bg-gray-100/50 active:bg-gray-100"
              onClick={() => {
                setShow(false)
                setHover(false)
              }}
            >
              {item.href ? (
                <Link href={item.href ?? '/'}>{item.text}</Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})
export default Dropdown
