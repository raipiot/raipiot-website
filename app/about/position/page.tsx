import ListArea from './components/ListArea'
import PhotoWall from './components/PhotoWall'

export const metadata = {
  title: '人才天地'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <PhotoWall />
      <ListArea />
    </div>
  )
}
