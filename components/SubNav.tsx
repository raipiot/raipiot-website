'use client'

import { memo, useEffect, useState } from 'react'

import { cn } from '@/utils'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu'

interface SubNavItem {
  title: string
  id?: string
}

interface Props {
  data?: SubNavItem[]
}

const SubNav = memo((props: Props) => {
  const [scrollDistance, setScrollDistance] = useState(0)
  const [activeMenuId, setActiveMenuId] = useState(props.data?.at(0)?.id)

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
      setScrollDistance(currentScrollPosition)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNav(id?: string) {
    if (!id) return
    setActiveMenuId(id)
    const element = document.getElementById(id)
    if (!element) return
    const { top } = element.getBoundingClientRect()
    window.scrollTo({ top: top + scrollDistance - 80, behavior: 'smooth' })
  }

  if (!props.data || props.data.length === 0) {
    return null
  }

  return (
    <div
      className={cn(
        'w-full bg-[#f7f7fa]',
        scrollDistance > 630 && 'fixed top-0 bg-white shadow z-40'
      )}
    >
      <div className="container mx-auto">
        <NavigationMenu>
          <NavigationMenuList className="space-x-12">
            {props.data.map((i) => (
              <NavigationMenuItem
                key={i.title}
                className="flex h-20 cursor-pointer select-none items-center font-bold"
                onClick={() => handleNav(i.id)}
              >
                <span className={cn(activeMenuId === i.id && 'underline underline-offset-8')}>
                  {i.title}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
})
export default SubNav
