const getGdyUsersSrc = (name: string, suffix: string) => `/img/gdy/users/${name}.${suffix}`

const getItem = (item: { title: string; suffix?: string; width?: number; height?: number }) => ({
  title: item.title,
  width: item.width ?? 200,
  height: item.height ?? 50,
  src: getGdyUsersSrc(item.title, item.suffix ?? 'png')
})

export const gdyUsers = [
  getItem({ title: '美畅', width: 140 }),
  getItem({ title: '恒圣石墨', suffix: 'jpg', width: 50 }),
  getItem({ title: '一道新能', width: 140 }),
  getItem({ title: '高景太阳能', width: 140 }),
  getItem({ title: '宇泽半导体', width: 50 }),
  getItem({ title: '晶科光伏材料', width: 120 }),
  getItem({ title: '天合光能', width: 140 }),
  getItem({ title: '大恒能源', width: 140 })
]
