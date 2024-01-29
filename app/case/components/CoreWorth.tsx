export default function CoreWorth() {
  const descriptions = [
    {
      title: '陪伴客户进行数字化路径的设计与实施',
      subTitles: [
        '采用 PDCA 循环理念对企业数字化转型线路进行体系性的评估，设计，实施，挖掘场景案例价值，并将实施结果进行标准化的提炼复用。'
      ]
    },
    {
      title: '帮助客户建立数字化转型的保障条件',
      subTitles: ['打造数字化转型氛围', '设立数字化转型组织机制']
    },
    {
      title: '助力客户培养数字化人才',
      subTitles: [
        '通过项目实施提升全员数字化意识，打造数字化人才梯队',
        '建立健全相关数字化转型中的必要制度流程'
      ]
    }
  ]
  return (
    <div
      className="px-auto flex w-full flex-col items-center bg-[#f7f7fa] px-4 pb-4 text-center sm:pb-16"
      id="core-worth"
    >
      <div className="my-16 mt-24 px-4 text-3xl font-bold">睿朴麟数字化转型定制方案的核心价值</div>
      <div className="grid max-w-[1200px] grid-cols-1 gap-4 px-4 pb-8 sm:grid-cols-3 sm:gap-4 sm:pb-0">
        {descriptions.map((d) => (
          <div className="flex flex-col items-center rounded-sm bg-[#1E222D] p-4 opacity-90 transition-opacity hover:opacity-100">
            <div className="my-4 pb-4 text-xl font-bold text-white">{d.title}</div>
            {d.subTitles.map((s) => (
              <div className="text-center text-sm text-gray-300">{s}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
