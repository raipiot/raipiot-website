'use client'

import { debounce } from 'lodash-es'

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
    const handleScroll = debounce(() => {
      // 获取第一个距离窗口顶部至少 100 像素的元素
      const firstElement = props.data
        ?.filter((i) => i.id)
        .map((i) => document.getElementById(i.id!))
        .find((i) => (i?.getBoundingClientRect()?.top || -90) > -80)
      if (firstElement) {
        setActiveMenuId(firstElement.id)
      }
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleNav(id?: string) {
    if (id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          setActiveMenuId(id)
        }, 700)
      }
    }
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
