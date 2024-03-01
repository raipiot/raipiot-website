import { MenuIcon } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import type { NavbarItem } from '@/constants'
import { navbar } from '@/constants'
import { cn } from '@/utils'

function MobileHot({ hot }: { hot?: boolean }) {
  return hot ? (
    <span className="ms-1 rounded-sm bg-red-500 px-[2px] py-[1px] text-[8px] leading-3 text-white">
      HOT
    </span>
  ) : null
}

function SubChildren({
  item,
  setOpen,
  className
}: {
  item: NavbarItem
  className?: string
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div
      className={cn('flex flex-col items-start', className)}
      key={item.title}
    >
      {item.href ? (
        <NextLink
          href={item.href}
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          {item.title} <MobileHot hot={item.hot} />
        </NextLink>
      ) : (
        <div
          key={item.title}
          className="mb-1 flex items-center font-bold"
        >
          {item.title}
          <MobileHot hot={item.hot} />
        </div>
      )}
      {item.children?.map((subItem, subIndex) => {
        if (subItem.divider) {
          return (
            <Separator
              key={subIndex}
              className="mx-auto my-2 h-[2px] w-full"
            />
          )
        }
        return subItem.href ? (
          <div>
            <NextLink
              href={subItem.href}
              key={subIndex}
              className="mt-2 flex items-center transition-all active:opacity-75"
              onClick={() => setOpen(false)}
            >
              {subItem.title}
              <MobileHot hot={subItem.hot} />
            </NextLink>
            {subItem.children?.map((subSubItem, subSubIndex) => (
              <SubChildren
                item={subSubItem}
                setOpen={setOpen}
                className="pl-4 pt-2"
                key={subSubIndex}
              />
            ))}
          </div>
        ) : (
          <div
            key={subIndex}
            className={cn(subItem.hidden && 'opacity-0')}
          >
            <div>{subItem.title}</div>
            {subItem.children?.map((subSubItem, subSubIndex) => (
              <SubChildren
                item={subSubItem}
                setOpen={setOpen}
                className="pl-4"
                key={subItem.title}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default function MobileMenu() {
  const [open, setOpen] = useState(!false)

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="block sm:hidden"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-scroll">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription>
            <Accordion
              type="single"
              collapsible
            >
              {navbar.map((i) => (
                <AccordionItem
                  value={i.title!}
                  key={i.title}
                >
                  <AccordionTrigger className="text-lg">{i.title}</AccordionTrigger>
                  <AccordionContent className="space-y-4 py-2">
                    {i.children?.map((ci) => (
                      <SubChildren
                        key={ci.title}
                        item={ci}
                        setOpen={setOpen}
                      />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
