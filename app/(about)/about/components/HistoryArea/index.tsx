'use client'

import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/utils'

const data = [
  {
    title: '2023',
    contents: [
      '获评“高新技术企业”',
      '软著累计 31 件，专利 3件',
      '苏州市新时代工商管理企业家联合会智能制造及半导体专委会理事单位',
      '智能供应链协同平台“跟单猿”上线',
      '第二代 MES 上线'
    ]
  },
  {
    title: '2022',
    contents: [
      '获评“双软企业”',
      '获评“姑苏创业领军人才企业”',
      '第一代 MES 上线',
      '光伏单晶智能制造方案获“首届大湾区数字经济与商业分析论坛”产学研优秀案例',
      'EPICOR 全球战略合作伙伴',
      '炎黄推广战略伙伴',
      '中国智能制造系统解决供应商联盟理事单位',
      'ISO/IEC 20000-1、ISO/IEC 27001 认证',
      'GB/T 22080-2016 认证',
      'ISO9001 认证'
    ]
  },
  {
    title: '2021',
    contents: ['国际货运 TMS 首版上线']
  },
  {
    title: '2020',
    contents: ['公司成立']
  }
]

export default function HistoryArea() {
  const [current, setCurrent] = useState('2023')

  return (
    <>
      <div className="relative hidden h-[380px] w-full p-24 text-white sm:flex">
        <div className="container mx-auto flex flex-col items-center justify-between">
          <div className="text-3xl">发展里程碑</div>
          <div className="relative flex w-full justify-between">
            {data.map((i, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-full bg-[#bfc0c1] p-2 cursor-pointer select-none',
                  i.title === current && 'bg-white transition-all'
                )}
                onClick={() => setCurrent(i.title)}
              >
                <span
                  className={cn(
                    'flex h-20 w-20 items-center justify-center rounded-full text-[#666666]',
                    i.title === current && 'bg-[#333333] text-white transition-all'
                  )}
                >
                  {i.title}
                </span>
              </div>
            ))}
            <div className="absolute inset-x-0 top-1/2 -z-10 h-1 w-full bg-[#bfc0c1]" />
          </div>
        </div>
        <Image
          className="-z-50"
          src="https://www.rootcloud.com/cn2023/images/aboutPart4.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="container mx-auto hidden space-x-12 sm:flex">
        {data.map((i, index) => (
          <div
            className="flex flex-[1] flex-col space-y-2"
            key={index}
          >
            <div className="text-3xl">{i.title}</div>
            <div className="-ml-3 flex flex-col space-y-1">
              {i.contents.map((c) => (
                <div
                  className="flex space-x-2"
                  key={c}
                >
                  <span>•</span>
                  <span className="text-[#666666]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
    </>
  )
}
