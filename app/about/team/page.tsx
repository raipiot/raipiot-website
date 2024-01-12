import JoinUsArea from './components/JoinUsArea'
import PhotoWallArea from './components/PhotoWallArea'

export const metadata = {
  title: '人才天地'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <PhotoWallArea />
      <JoinUsArea />
    </div>
  )
}
