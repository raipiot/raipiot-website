'use client'

import { memo } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { NewsType } from '@/enums'
import { cn } from '@/utils'

import { getNewsTypeText } from '../../utils'

interface Props {
  activeTabId: number
  setActiveTabId: (id: number) => void
}

const data = [NewsType.ALL, NewsType.DYNAMICS, NewsType.QLY, NewsType.NEWS, NewsType.POLICY]

const TabArea = memo((props: Props) => (
  <div className={cn('w-full bg-[#f7f7fa]')}>
    <div className="container mx-auto overflow-x-scroll">
      <NavigationMenu>
        <NavigationMenuList className="space-x-12 pe-12">
          {data.map((id) => (
            <NavigationMenuItem
              key={id}
              className="flex h-20 cursor-pointer select-none items-center whitespace-nowrap font-bold"
              onClick={() => props.setActiveTabId(id!)}
            >
              <span className={cn(props.activeTabId === id && 'underline underline-offset-8')}>
                {getNewsTypeText(id)}
              </span>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
))
export default TabArea
