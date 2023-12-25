'use client'

import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { memo, useState } from 'react'

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
  list?: DropDownItem[]
}

const Dropdown = memo((props: Props) => {
  const [show, setShow] = useState(false)
  const [hover, setHover] = useState(false)
  const { text, list, ...rest } = props
  return (
    <div
      {...rest}
      className="relative -mb-1.5 pb-1.5 hover:text-[#333333]"
      onMouseOver={() => setShow(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseOut={() => setShow(false)}
    >
      <label className="cursor-pointer rounded-3xl transition-all">{text}</label>
      <ul
        className={cn(
          'absolute -bottom-1.5 left-0 z-[1] w-fit translate-y-full space-y-1 rounded-md bg-white p-1 text-[#333333] shadow-lg transition-all',
          show || hover ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        {list?.map((item, index) => (
          <li
            key={index}
            className="w-full whitespace-nowrap rounded-lg p-2 transition-all hover:bg-slate-200"
            onClick={() => {
              setShow(false)
              setHover(false)
            }}
          >
            <Link href={item.href ?? '/'}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
})
export default Dropdown
