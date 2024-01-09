import clsx from 'clsx'
import Image from 'next/image'
import React, { memo } from 'react'

import { Card } from '../ui/card'
import styles from './index.module.css'

interface DataItem {
  title: string
  src: string
  width?: number
  height?: number
}

interface Props {
  data?: DataItem[]
  reverse?: boolean
  className?: string
}

const ImageScrollList = memo((props: Props) => {
  if (!props.data || props.data.length === 0) return null

  const data = props.data.concat(props.data).concat(props.data)

  return (
    <div
      className={clsx(
        'flex items-center space-x-4',
        props.reverse ? styles.listReverse : styles.list,
        props.reverse && 'flex-row-reverse',
        props.className
      )}
    >
      {data.map((i, index) => (
        <Card
          className="p-4 shadow-lg"
          key={i.title + index}
        >
          <Image
            src={i.src}
            alt=""
            sizes="100vw"
            width={i.width}
            height={50}
          />
        </Card>
      ))}
    </div>
  )
})
export default ImageScrollList
