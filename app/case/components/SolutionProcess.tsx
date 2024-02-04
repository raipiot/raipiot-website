import {
  DraftingCompass,
  Drill,
  LampDesk,
  PencilRuler,
  Radar,
  ScrollText,
  UserRoundCheck
} from 'lucide-react'

function Arrow({ className = '' }: { className?: string }) {
  return (
    <>
      <span
        className={`${className} mx-auto hidden h-8 w-12 rotate-90 bg-blue-200 sm:block sm:rotate-0 md:w-10`}
        style={{
          clipPath: 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)'
        }}
      />
      <span
        className={`${className} mx-auto inline-block h-12 w-8  bg-blue-200 sm:hidden`}
        style={{
          clipPath: 'polygon(20% 0%, 20% 60%,0% 60%, 50% 100%, 100% 60%, 80% 60%, 80% 0%)'
        }}
      />
    </>
  )
}

function Box({
  children,
  className,
  icon
}: {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}) {
  return (
    <div
      className={`${className ?? 'mb-2'}  flex max-w-[160px]  items-center rounded-sm p-1.5 px-0 text-[12px]`}
    >
      {icon && <div className="mr-1">{icon}</div>}
      <div className="text-gray-600">{children}</div>
    </div>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 w-full rounded-sm bg-[#384054] p-2 text-center text-[12px] text-white sm:mb-0">
      {children}
    </div>
  )
}

function PlanComponent() {
  return (
    <div className="w-[60vw] text-[12px] sm:w-max">
      <div className="flex flex-col items-center sm:flex-row md:gap-4 lg:gap-2">
        <div className="flex flex-col">
          <Box icon={<DraftingCompass className="w-[16px]" />}>
            智能制造能力水平评估（GB/T 39117-2020)
          </Box>
          <Box icon={<DraftingCompass className="w-[16px]" />}>
            精益六西格玛应用评估 (GB/T 37726-2019 )
          </Box>
          <Box icon={<DraftingCompass className="w-[16px]" />}>流程成熟度评估（PEMM框架）</Box>
        </div>
        <Arrow />
        <div className="my-4 flex items-center sm:my-0">
          <div className="mr-4">
            <Box icon={<ScrollText />}>评估报告</Box>
            <Box icon={<Radar />}>雷达图</Box>
          </div>
          {/* <div>
            <NextImage
              className="mb-4"
              src={getSrc('/img/case/rate_report.png')}
              alt=""
              width={64}
              height={64}
            />
            <NextImage
              src={getSrc('/img/case/radar_chart.png')}
              alt=""
              width={64}
              height={64}
            />
          </div> */}
        </div>
        <Arrow />
        <Box
          className="mb-4 sm:mb-0"
          icon={<PencilRuler />}
        >
          方案设计评估
        </Box>
      </div>
      <SubTitle>P（Plan）方案设计及规划</SubTitle>
    </div>
  )
}

function DoComponent() {
  return (
    <div className="flex w-[60vw] flex-col justify-between pb-8 text-[12px] sm:w-max sm:pb-0">
      <div className="flex h-[60px] items-center justify-center sm:h-[174px]">
        <Box
          icon={<Drill />}
          className="mb-0 px-8"
        >
          实施交付
        </Box>
      </div>
      <SubTitle>D（Do）项目实施</SubTitle>
    </div>
  )
}

function CheckComponent() {
  return (
    <div className="flex flex-col justify-between pb-8 sm:pb-0">
      <div className="flex h-[56px] items-center justify-center sm:h-[174px]">
        <Box
          className="mb-0 px-8"
          icon={<LampDesk />}
        >
          运营
        </Box>
      </div>
      <SubTitle>C（Check）执行检查</SubTitle>
    </div>
  )
}

// 售后组件
function AfterSaleComponent() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex h-[56px] items-center justify-center sm:h-[174px]">
        <Box
          icon={<UserRoundCheck />}
          className="mb-0 px-8"
        >
          售后
        </Box>
      </div>
      <SubTitle>A（Act）结果总结经验固化</SubTitle>
    </div>
  )
}

export default function SolutionProcess() {
  return (
    <div
      id="solution-progress"
      className="flex flex-col items-center space-y-8 px-4 py-20 text-center sm:px-12 sm:py-24"
    >
      <h3 className="text-3xl font-bold">数字化转型定制方案</h3>
      <p>
        针对不同客户的在产业生态上的位置，结合企业的生命周期所在阶段，为企业量身定制用得起、用得好的数字化转型路线
      </p>
      <div className="block flex-col flex-wrap items-center gap-0 sm:flex sm:flex-row sm:gap-4">
        <PlanComponent />
        <Arrow className="mb-0 sm:mb-8" />
        <DoComponent />
        <Arrow className="mb-0 sm:mb-8" />
        <CheckComponent />
        <Arrow className="mb-0 sm:mb-8" />
        <AfterSaleComponent />
      </div>
    </div>
  )
}
