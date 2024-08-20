import { AiOutlineSecurityScan } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { PiUsersThin, PiUserSwitchThin } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";

export const LIST_NAV_ITEM = [
  {
    name: 'Dashboard',
    href: '/',
    icon: VscDashboard,
  },
  {
    name: 'User Management',
    href: '/user-management',
    icon: PiUserSwitchThin,
  },
  {
    name: 'Team Management',
    href: '/team-management',
    icon: PiUsersThin,
  },
  {
    name: 'Project Management',
    href: '/project-management',
    icon: CiViewBoard,
  },
  {
    name: 'Role Management',
    href: '/role-management',
    icon: AiOutlineSecurityScan,
  }
]