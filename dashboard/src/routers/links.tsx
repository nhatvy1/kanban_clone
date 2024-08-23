import { AiOutlineSecurityScan } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiCarProfileThin, PiUsersThin, PiUserSwitchThin } from 'react-icons/pi'

export const LIST_NAV_ITEM = [
  {
    name: 'User Management',
    href: '/user-management',
    icon: PiUserSwitchThin
  },
  {
    name: 'Team Management',
    icon: PiUsersThin,
    href: '/team-management',
  },
  {
    name: 'Project Management',
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
    name: 'Role Management',
    href: '/role-management',
    icon: AiOutlineSecurityScan
  },
  {
    name: 'Settings',
    href: '/role-management',
    icon: IoSettingsOutline

  }
]
