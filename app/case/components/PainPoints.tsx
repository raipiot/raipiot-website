import clsx from 'clsx'

import { Card } from '@/components/ui/card'

interface Props {
  items: string[]
}

export default function PainPointArea({ items }: Props) {
  return (
    <div
      id="pain-points"
      className="w-full"
    >
      <div className="container mx-auto flex flex-col items-center px-4 py-12 sm:py-24">
        <div className="mb-10 text-center text-3xl font-medium">企业痛点</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4">
          {items.map((i, idx) => (
            <Card
              key={i}
              className={clsx(
                'flex h-40 flex-col items-center space-y-2 from-blue-950 to-gray-600 p-6 text-center text-white',
                idx % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'
              )}
            >
              <p className="flex flex-1 items-center text-sm">{i}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
