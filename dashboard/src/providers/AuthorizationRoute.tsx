import { RootState } from '@/redux/store'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface Props {
  module: string
  permission: string
  children: ReactNode
}

const AuthorizationRoute = ({ children, module, permission }: Props) => {
  const { permissions } = useSelector((state: RootState) => state.auth)
  if (permissions) {
    const hasAdmin =
      Object.keys(permissions).includes('all') &&
      permissions['all'].includes('manage')
    const hasPermission =
      Object.keys(permissions).includes(module) &&
      permissions[module].includes(permission)

    if (hasAdmin || hasPermission) return children
  }
  return <Navigate to='/not-allowed-to-access-this-page' />
}

export default AuthorizationRoute
