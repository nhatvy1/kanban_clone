import { ReactNode } from "react"

interface Props {
  allowedRoles: string[]
  allowedPermissions?: string[]
  children: ReactNode
}

const ProtectedRoute = ({ allowedRoles, allowedPermissions, children }: Props) => {
  console.log('Check roles: ', allowedRoles)
  return children
}

export default ProtectedRoute
