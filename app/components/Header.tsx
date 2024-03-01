'use client'

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
import { Separator } from '@/components/ui/separator'
import type { NavbarItem } from '@/constants'
import { navbar } from '@/constants'
import { cn, getSrc } from '@/utils'

import MobileMenu from './MobileMenu'

function Hot({ hot }: { hot?: boolean }) {
  return hot ? (
    <span className="ms-1 rounded-sm bg-red-500 px-[2px] py-[1px] text-[8px] leading-3 text-white">
      HOT
    </span>
  ) : null
}

function SubChildren({ item, className = '' }: { item: NavbarItem; className?: string }) {
  return (
    <div className={cn('flex flex-col', className)}>
      {item.href ? (
        <NextLink
          href={item.href!}
          legacyBehavior
          passHref
          className={cn('w-full', item.hidden && 'opacity-0', className)}
        >
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <div className="flex items-center">
              {item.title}
              <Hot hot={item.hot} />
            </div>
          </NavigationMenuLink>
        </NextLink>
      ) : (
        <div
          className={cn(
            'font-semibold flex items-center',
            item.children && 'px-4 py-2',
            item.hidden && 'opacity-0',
            className
          )}
        >
          {item.title}
          <Hot hot={item.hot} />
        </div>
      )}
      {item.children?.map((subItem) => {
        if (subItem.divider) {
          return (
            <Separator
              key={subItem.title}
              className="mx-auto my-2 h-[2px] w-[90%]"
            />
          )
        }
        return subItem.href ? (
          <div
            key={subItem.title}
            className={cn(subItem.hidden && 'opacity-0')}
          >
            <NextLink
              href={subItem.href ?? '/'}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {subItem.title}
                <Hot hot={subItem.hot} />
              </NavigationMenuLink>
            </NextLink>
            {subItem.children?.map((subSubItem) => (
              <SubChildren
                className="pl-4"
                key={subSubItem.title}
                item={subSubItem}
              />
            ))}
          </div>
        ) : (
          <div
            key={subItem.title}
            className={cn(subItem.hidden && 'opacity-0')}
          >
            {subItem.title}
            {subItem.children?.map((subSubItem) => (
              <SubChildren
                className="pl-4"
                key={subSubItem.title}
                item={subSubItem}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

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
        'fixed top-0 z-50 transition-all h-20 w-screen bg-white flex justify-center',
        scrollDirection === 'down' && scrollDistance > 80 ? 'translate-y-[-100%]' : 'translate-y-0',
        scrollDirection === 'up' && scrollDistance > 100 && 'shadow'
      )}
    >
      <div className="container flex h-full justify-between self-center px-4">
        <div className="flex select-none items-center">
          <NextLink
            href="/"
            className="cursor-pointer"
          >
            <NextImage
              src={getSrc('/img/logo/raipiot.png')}
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              priority
              style={{ width: 95, height: 'auto' }}
            />
          </NextLink>

          <NavigationMenu className="ml-20 hidden sm:flex">
            <NavigationMenuList>
              {navbar.map((i) => (
                <NavigationMenuItem key={i.title}>
                  <NavigationMenuTrigger className="text-base">{i.title}</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      'flex whitespace-nowrap p-2 min-w-[312px]',
                      i.vertical ? 'flex-col space-y-2' : 'space-x-2'
                    )}
                  >
                    {i.children?.map((item) => <SubChildren item={item} />)}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            asChild
          >
            <NextLink href="/waiting">预约交流</NextLink>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
