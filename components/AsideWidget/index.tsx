'use client'

import { ArrowUpToLine, NotebookPen, Phone, QrCode } from 'lucide-react'

import { cn, getSrc } from '@/utils'

function PopArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute right-6 hidden w-max translate-y-4 items-center transition-all group-hover:flex group-hover:translate-y-0">
      <div className="rounded-md bg-white p-2 shadow">{children}</div>
      <span className="size-4" />
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

  return (
    <div
      className={cn(
        'fixed right-4 top-0 h-fit my-auto bottom-0 z-[999999] hidden rounded-l-sm bg-[#fff] p-2 text-[#1c1f27] shadow sm:flex transition-all',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="group flex w-full items-center">
          <Phone className="w-5 cursor-pointer" />
          <PopArea>
            咨询热线：<span className="font-bold text-black">0512 - 66307608</span>
          </PopArea>
        </div>
        <div className="group flex items-center justify-end">
          <QrCode className="w-5 cursor-pointer" />
          <PopArea>
            <NextImage
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
          <NotebookPen className="w-5 cursor-pointer" />
          <PopArea>
            <div>预约交流，敬请期待</div>
          </PopArea>
        </div>
        <div
          className="group flex cursor-pointer items-center justify-end"
          onClick={handleScrollToTop}
        >
          <ArrowUpToLine className="w-5" />
        </div>
      </div>
    </div>
  )
}
