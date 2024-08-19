import { AiOutlineSecurityScan } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { PiUsersThin, PiUserSwitchThin } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";

export const links = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: VscDashboard,
    element: <h1>Home dashboard</h1>
  },
  {
    name: 'User Management',
    href: '/admin/user-management',
    icon: PiUserSwitchThin,
    element: <h1>User management</h1>
  },
  {
    name: 'Team Management',
    href: '/admin/team-management',
    icon: PiUsersThin,
    element: <h1>Team management</h1>
  },
  {
    name: 'Project Management',
    href: '/admin/project-management',
    icon: CiViewBoard,
    element: <h1>Project management</h1>
  },
  {
    name: 'Role Management',
    href: '/admin/role-management',
    icon: AiOutlineSecurityScan,
    element: <h1>Role management</h1>
  }
]