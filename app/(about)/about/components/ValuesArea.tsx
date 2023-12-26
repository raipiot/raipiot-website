import Image from 'next/image'

interface TextRowProps {
  title: string
  content: string
}

function TextRow(props: TextRowProps) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-2xl">{props.title}</span>
      <span className="text-lg text-[#666666]">{props.content}</span>
    </div>
  )
}

export default function ValuesArea() {
  return (
    <div className="relative flex w-full">
      <div className="container absolute inset-0 m-auto flex items-center pl-4 sm:pl-0">
        <div className="flex flex-col space-y-6">
          <TextRow
            title="愿景"
            content="促进企业管理思想的解放和发展"
          />
          <TextRow
            title="使命"
            content="解密数据、赋能决策"
          />
          <TextRow
            title="价值观"
            content="求是、增值、阳光"
          />
        </div>
      </div>

      <div className="flex-1 bg-[#f7f7fa]" />

      <div className="relative h-[400px] flex-1">
        <Image
          src="https://www.rootcloud.com/vancheerfile/Images/2021/7/20210720124446397.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
