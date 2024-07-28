import { Home, LineChart, Package, User, Users } from 'lucide-react'

export const ListMenu = [
  { id: 1, href: '/', label: 'Trang chủ', icon: Home },
  { id: 2, href: '/project-management', label: 'Dự án', icon: Package },
  { id: 3, href: '/team-management', label: 'Team', icon: Users },
  { id: 4, href: '/user-management', label: 'Người dùng', icon: User },
  { id: 5, href: '#', label: 'Thống kê', icon: LineChart }
]
