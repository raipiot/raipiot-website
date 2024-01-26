interface Props {
  values: string[]
}
export default function ClienteleValue({ values }: Props) {
  return (
    <div
      id="clientele-value"
      className="flex w-full flex-col py-20"
    >
      <div className="mb-8 text-center text-3xl font-bold">客户价值</div>
      <div className="mx-4 flex flex-col items-center text-center">
        {values.map((text) => (
          <div
            className="p-4"
            id={text}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
