'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import React, { memo, useMemo, useState } from 'react'

import { cn, getSrc } from '@/utils'

import { Card } from '../ui/card'
import styles from './index.module.scss'

interface DataItem {
  title: string
  src: string
  width: number
}

interface Props {
  data?: DataItem[]
  reverse?: boolean
  className?: string
  height?: number
  duration?: `${number}s`
}

interface ImageScrollListCSSProperties extends CSSProperties {
  '--image-width': string | number
  '--scroll-duration': `${number}s`
}

const ImageScrollList = memo((props: Props) => {
  const [animationPaused, setAnimationPaused] = useState(false)

  const imageWidth = useMemo(
    () => -(props.data?.concat(props.data)?.reduce((acc, cur) => acc + cur.width, 0) || 0),
    [props.data]
  )

  function handleHoverItem() {
    setAnimationPaused(true)
  }

  function handleLeaveItem() {
    setAnimationPaused(false)
  }

  if (!props.data || props.data.length === 0) return null

  const data = props.data.concat(props.data)

  return (
    <div
      className={cn(
        'flex items-center space-x-4',
        props.reverse ? styles.listReverse : styles.list,
        props.className
      )}
      style={
        {
          '--scroll-duration': props.duration || '20s',
          '--image-width': `${imageWidth}px`,
          animationPlayState: animationPaused ? 'paused' : 'running'
        } as ImageScrollListCSSProperties
      }
    >
      {data.map((i, index) => (
        <Card
          className={cn('group flex w-full items-center justify-center p-6 shadow-sm ')}
          key={i.title + index}
        >
          <div
            style={{ width: i.width, height: props.height }}
            className="flex"
          >
            <Image
              className="object-contain transition-all duration-500 group-hover:scale-110 group-active:scale-100"
              style={{ width: i.width, height: 'auto' }}
              src={getSrc(i.src)}
              alt={i.title}
              sizes="100vw"
              width={0}
              height={0}
              onMouseEnter={() => handleHoverItem()}
              onMouseLeave={() => handleLeaveItem()}
            />
          </div>
        </Card>
      ))}
    </div>
  )
})
export default ImageScrollList
