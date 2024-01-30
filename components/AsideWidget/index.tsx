'use client'

import { ArrowUpToLine, NotebookPen, Phone, QrCode } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { getSrc } from '@/utils'

function PopArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-6 hidden w-max translate-y-4 items-center  transition-all group-hover:flex group-hover:translate-y-0">
      <div className="space-x-1 rounded-md bg-white p-2 shadow">{children}</div>
      <span className="h-4 w-4" />
    </div>
  )
}

export default function AsideWidget() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!show) {
    return null
  }

  return (
    <div className="fixed right-0 top-[50%] z-[999999] hidden translate-y-[-50%]  rounded-l-sm bg-[#fff] p-2 text-[#1c1f27] shadow sm:flex">
      <div className="flex flex-col gap-2">
        <div className="group flex w-full items-center">
          <Phone className="w-5" />
          <PopArea>
            咨询热线：<span className="font-bold text-black">0512 - 66307608</span>
          </PopArea>
        </div>
        <div className="group flex items-center justify-end">
          <QrCode className="w-5" />
          <PopArea>
            <Image
              src={getSrc('/img/qrcode.png')}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-32"
            />
            <div className="text-center text-sm">公众号</div>
          </PopArea>
        </div>
        <div className="group flex items-center justify-end">
          <NotebookPen className="w-5" />
          <PopArea>
            <div>预约交流，敬请期待</div>
          </PopArea>
        </div>
        <div
          className="group flex cursor-pointer items-center justify-end "
          onClick={handleScrollToTop}
        >
          <ArrowUpToLine className="w-5" />
        </div>
      </div>
    </div>
  )
}
