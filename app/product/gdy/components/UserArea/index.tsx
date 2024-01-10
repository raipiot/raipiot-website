import ImageScrollList from '@/components/ImageScrollList'
import { gdyUsers } from '@/data'

export default function UserArea() {
  return (
    <div
      id="user"
      className="w-full bg-[#f7f7fa] py-12 sm:py-24"
    >
      <div className="container mx-auto space-y-4 overflow-hidden text-center">
        <div className="mb-10 text-3xl font-medium">用户群体</div>
        <ImageScrollList
          data={gdyUsers.at(0)}
          height={60}
          duration="60s"
        />
        <ImageScrollList
          data={gdyUsers.at(1)}
          className="py-4"
          reverse
          height={60}
          duration="60s"
        />
        <ImageScrollList
          data={gdyUsers.at(2)}
          height={60}
          duration="60s"
        />
      </div>
    </div>
  )
}
