'use client'

import Link from 'next/link'
import { memo } from 'react'

import { cn } from '@/utils'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'

interface SubNavItem {
  title: string
  href?: string
}

interface Props {
  data?: SubNavItem[]
}

const SubNav = memo((props: Props) => {
  if (!props.data || props.data.length === 0) {
    return null
  }

  return (
    <NavigationMenu className="py-4">
      <NavigationMenuList>
        {props.data.map((i) => (
          <NavigationMenuItem
            key={i.title}
            className={cn()}
          >
            {i.href ? (
              <Link
                href={i.href}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {i.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <span>{i.title}</span>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
})
export default SubNav
