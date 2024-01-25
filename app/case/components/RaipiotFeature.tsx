interface Props {
  intro: string[]
}
export default function RaipiotFeature({ intro }: Props) {
  return (
    <div
      id="raipiot-feature"
      className="flex w-full flex-col bg-[#f7f7fa] py-20 sm:py-24"
    >
      <div className="mb-8 text-center">睿朴麟为企业数字化转型搭梯架桥</div>
      <div className="flex flex-col items-center px-8 text-center text-3xl font-bold">{intro}</div>
    </div>
  )
}
