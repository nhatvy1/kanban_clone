import { AiOutlineSecurityScan } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { PiUsersThin, PiUserSwitchThin } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";

export const LIST_NAV_ITEM = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: VscDashboard,
  },
  {
    name: 'User Management',
    href: '/admin/user-management',
    icon: PiUserSwitchThin,
  },
  {
    name: 'Team Management',
    href: '/admin/team-management',
    icon: PiUsersThin,
  },
  {
    name: 'Project Management',
    href: '/admin/project-management',
    icon: CiViewBoard,
  },
  {
    name: 'Role Management',
    href: '/admin/role-management',
    icon: AiOutlineSecurityScan,
  }
]