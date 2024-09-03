import { RootState } from '@/redux/store'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  children: ReactNode
  module: string
  permission: string
}

const Authorization = ({ children, module, permission }: Props) => {
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

  return null
}

export default Authorization
