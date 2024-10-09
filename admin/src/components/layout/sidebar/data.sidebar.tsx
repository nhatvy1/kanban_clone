import { AiOutlineSecurityScan } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiCarProfileThin, PiUsersThin, PiUserSwitchThin } from 'react-icons/pi'

export const LIST_NAV_ITEM = [
  {
    name: 'Quản lý người dùng',
    href: '/user-management',
    icon: PiUserSwitchThin,
    module: 'user',
    permission: 'read'
  },
  {
    name: 'Quản lý team',
    icon: PiUsersThin,
    href: '/team-management',
    module: 'team',
    permission: 'read'
  },
  {
    name: 'Quản lý dự án',
    icon: PiUserSwitchThin,
    module: 'project',
    permission: 'read',
    subMenu: [
      {
        name: 'Task Management',
        href: '/reminato/user-management',
        icon: PiCarProfileThin
      },
      {
        name: 'Policy',
        href: '/reminato/api-key-management',
        icon: PiCarProfileThin
      }
    ]
  },
  {
    name: 'Phân quyền',
    href: '/role-management',
    icon: AiOutlineSecurityScan,
    module: 'role',
    permission: 'read'
  },
  {
    name: 'Cấu hình cài đặt',
    href: '/role-management',
    icon: IoSettingsOutline,
    module: 'setting',
    permission: 'read'
  }
]
