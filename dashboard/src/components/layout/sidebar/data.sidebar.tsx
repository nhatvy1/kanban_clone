import { AiOutlineSecurityScan } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiCarProfileThin, PiUsersThin, PiUserSwitchThin } from 'react-icons/pi'

export const LIST_NAV_ITEM = [
  {
    name: 'Quản lý người dùng',
    href: '/user-management',
    icon: PiUserSwitchThin
  },
  {
    name: 'Quản lý team',
    icon: PiUsersThin,
    href: '/team-management',
  },
  {
    name: 'Quản lý dự án',
    icon: PiUserSwitchThin,
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
    icon: AiOutlineSecurityScan
  },
  {
    name: 'Cấu hình cài đặt',
    href: '/role-management',
    icon: IoSettingsOutline

  }
]
