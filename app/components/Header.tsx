'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { navbar } from '@/constants'
import { cn, getSrc } from '@/utils'

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
              src={getSrc('/img/logo/raipiot.png')}
              alt=""
              width="90"
              height="50"
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          <NavigationMenu className="ml-20 hidden md:flex">
            <NavigationMenuList>
              {navbar.map((i) => (
                <NavigationMenuItem key={i.title}>
                  <NavigationMenuTrigger className="text-base">{i.title}</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      'flex whitespace-nowrap p-2',
                      i.vertical ? 'flex-col space-y-2' : 'space-x-2'
                    )}
                  >
                    {i.children!.map((item) => (
                      <div
                        key={item.title}
                        className="flex flex-col"
                      >
                        {item.href ? (
                          <Link
                            href={item.href}
                            legacyBehavior
                            passHref
                            className="w-full"
                          >
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                              {item.title}
                            </NavigationMenuLink>
                          </Link>
                        ) : (
                          <div className={cn('font-semibold', item.children && 'px-4 py-2')}>
                            {item.title}
                          </div>
                        )}
                        {item.children?.map((subItem) =>
                          subItem.href ? (
                            <div key={subItem.title}>
                              <Link
                                href={subItem.href ?? '/'}
                                legacyBehavior
                                passHref
                              >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  {subItem.title}
                                </NavigationMenuLink>
                              </Link>
                            </div>
                          ) : (
                            <div>{subItem.title}</div>
                          )
                        )}
                      </div>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
