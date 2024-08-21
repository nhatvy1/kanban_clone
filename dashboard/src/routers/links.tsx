import { AiOutlineSecurityScan } from 'react-icons/ai'
import { PiCarProfileThin, PiUsersThin, PiUserSwitchThin } from 'react-icons/pi'

export const LIST_NAV_ITEM = [
  {
    name: 'User Management',
    href: '/user-management',
    icon: PiUsersThin
  },
  {
    name: 'Team Management',
    href: '/team-management',
    icon: PiUsersThin
  },
  {
    name: 'Project Management',
    href: '/project-management',
    icon: PiUsersThin
  },
  {
    name: 'Quản lý reminatio',
    icon: PiUserSwitchThin,
    subMenu: [
      {
        name: 'Quản lý tài khoản',
        href: '/reminato/user-management',
        icon: PiCarProfileThin
      },
      {
        name: 'Quản lý API Key',
        href: '/reminato/api-key-management',
        icon: PiCarProfileThin
      }
    ]
  },
  {
    name: 'Role Management',
    href: '/role-management',
    icon: AiOutlineSecurityScan
  }
]
