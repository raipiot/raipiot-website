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
  const [activeMenuId, setActiveMenuId] = useState(props.data?.at(0)?.id)

  useEffect(() => {
    function handleScroll() {
      const io = new IntersectionObserver((entries) => {
        // 如果当前元素出现在视口中，则设置当前元素的 id 为 activeMenuId，并且跳出循环
        for (let index = 0; index < entries.length; index += 1) {
          const element = entries[index]
          if (element?.isIntersecting && element?.intersectionRatio === 1) {
            setActiveMenuId(element.target.id)
            break
          }
        }
      })
      console.log('page io:', io)
      props.data?.forEach((i) => {
        if (i.id) {
          const element = document.getElementById(i.id)
          if (!element) {
            return
          }
          io.observe(element)
        }
      })
      return io
    }
    const io = handleScroll()
    return () => {
      io.disconnect()
    }
  }, [])

  function handleNav(id?: string) {
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!props.data || props.data.length === 0) {
    return null
  }

  return (
    <div
      className={cn('w-full bg-[#f7f7fa] hidden sm:block', 'sticky top-0 bg-white shadow z-[999]')}
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
