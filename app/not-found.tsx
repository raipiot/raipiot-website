import Button from '@/components/Button'

export default function NotFound() {
  return (
    <div className="container absolute inset-0 m-auto flex h-fit w-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">出错了</span>
      <span className="text-base font-medium sm:text-xl">无法找到您要访问的页面</span>
      <Button
        link
        href="/"
      >
        返回首页
      </Button>
    </div>
  )
}
