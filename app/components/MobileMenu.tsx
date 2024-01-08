import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

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
import { navbar } from '@/constants'
import { cn } from '@/utils'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

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
                      <div
                        className="flex flex-col items-start"
                        key={ci.title}
                      >
                        {ci.href ? (
                          <Link
                            href={ci.href}
                            onClick={() => setOpen(false)}
                          >
                            {ci.title}
                          </Link>
                        ) : (
                          <div
                            key={ci.title}
                            className="mb-1 font-bold"
                          >
                            {ci.title}
                          </div>
                        )}
                        {ci.children?.map((subItem, subIndex) => {
                          if (subItem.divider) {
                            return (
                              <Separator
                                key={subIndex}
                                className="mx-auto my-2 h-[2px] w-full"
                              />
                            )
                          }
                          return subItem.href ? (
                            <Link
                              href={subItem.href}
                              key={subIndex}
                              className="mt-2 transition-all active:opacity-75"
                              onClick={() => setOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ) : (
                            <div
                              key={subIndex}
                              className={cn(subItem.hidden && 'opacity-0')}
                            >
                              {subItem.title}
                            </div>
                          )
                        })}
                      </div>
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
