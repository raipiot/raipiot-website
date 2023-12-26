import { HeartHandshakeIcon, TargetIcon, TrophyIcon, UsersIcon } from 'lucide-react'

const iconProps = {
  size: 60,
  strokeWidth: 1,
  className: 'group-hover:rotate-360 transition-all duration-300'
}

const data = [
  {
    title: '用户第一',
    icon: <UsersIcon {...iconProps} />
  },
  {
    title: '心存使命',
    icon: <TargetIcon {...iconProps} />
  },
  {
    title: '实事求是',
    icon: <HeartHandshakeIcon {...iconProps} />
  },
  {
    title: '协作共赢',
    icon: <TrophyIcon {...iconProps} />
  }
]

export default function ValuesCardArea() {
  return (
    <div className="container mx-auto flex flex-col space-y-4 px-4 sm:flex-row sm:space-x-8 sm:space-y-0 sm:px-0">
      {data.map((i) => (
        <div className="group flex min-h-[400px] flex-1 flex-col items-center justify-center space-y-8 rounded-md bg-[#f7f7fa]">
          <div className="w-fit rounded-full bg-white p-12">
            <div className="transition-all duration-300 group-hover:animate-spinY-2">{i.icon}</div>
          </div>
          <span className="text-2xl">{i.title}</span>
        </div>
      ))}
    </div>
  )
}
