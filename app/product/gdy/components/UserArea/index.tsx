import ImageScrollList from '@/components/ImageScrollList'
import { gdyUsers } from '@/data'

export default function UserArea() {
  return (
    <div
      id="user"
      className="w-full pt-12 sm:pt-24"
    >
      <div className="container mx-auto space-y-4 overflow-hidden text-center">
        <span className="mb-10 text-3xl">用户群体</span>
        <ImageScrollList
          data={gdyUsers}
          className="pt-8"
        />
        <ImageScrollList
          data={gdyUsers}
          className="py-8"
          reverse
        />
        <ImageScrollList
          data={gdyUsers}
          className="pb-8"
        />
      </div>
    </div>
  )
}
