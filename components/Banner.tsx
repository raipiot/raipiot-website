'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { memo } from 'react'

interface BannerProps {
  bgSrc: string
  alt?: string
  height?: number
  title?: string
  subtitle?: string
  description?: string
  button?: ReactNode
}

const Banner = memo((props: BannerProps) => (
  <div
    className="relative flex w-full items-center"
    style={{ height: props.height ?? 455 }}
  >
    <Image
      className="absolute left-0 top-0 -z-50"
      src={props.bgSrc}
      alt={props.alt || ''}
      sizes="100vw"
      fill
      priority
      style={{ objectFit: 'cover' }}
    />
    <div className="-z-20 before:absolute before:inset-0 before:bg-[rgba(0,0,0,.5)] before:content-['']" />
    <div className="container m-auto flex flex-col space-y-4 px-4 text-white sm:px-0">
      <span className="text-4xl">{props.title}</span>
      <span>{props.subtitle}</span>
      <span>{props.description}</span>
      <div>{props.button}</div>
    </div>
  </div>
))
export default Banner
