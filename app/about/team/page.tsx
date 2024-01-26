import BannerArea from './components/BannerArea'
import JoinUsArea from './components/JoinUsArea'

export const metadata = {
  title: '人才天地'
}

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <BannerArea />
      {/* <PhotoWallArea /> */}
      <JoinUsArea />
    </div>
  )
}
