'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Dropdown from '@/components/Dropdown'
import { Button } from '@/components/ui/button'
import { navbar } from '@/constants'
import { cn } from '@/utils'

export default function Header() {
  const [loaded, setLoaded] = useState(false)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
      setScrollDistance(currentScrollPosition)

      if (currentScrollPosition > prevScrollPosition) {
        setScrollDirection('down')
      } else if (currentScrollPosition < prevScrollPosition) {
        setScrollDirection('up')
      }

      setPrevScrollPosition(currentScrollPosition)
    }
    setLoaded(true)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPosition, loaded])

  if (!loaded) return null

  return (
    <header
      className={cn(
        'fixed top-0 z-50 left-0 right-0 transition-all h-20 bg-white flex justify-center',
        scrollDirection === 'down' && scrollDistance > 80 ? 'translate-y-[-100%]' : 'translate-y-0',
        scrollDirection === 'up' && scrollDistance > 100 && 'shadow'
      )}
    >
      <div className="container flex justify-between self-center p-4">
        <div className="flex select-none items-center">
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src="/img/logo/raipiot.png"
              alt=""
              width="90"
              height="50"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          <div className="ml-20 hidden items-center space-x-12 md:flex">
            {navbar.map((i) => (
              <Dropdown
                key={i.title}
                text={i.title}
                href={i.href}
                list={i.children?.map((item) => ({
                  href: item.href,
                  text: item.title
                }))}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <Button variant="outline">
            <Link href="/waiting">预约交流</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
