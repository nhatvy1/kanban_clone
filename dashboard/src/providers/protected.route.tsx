import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'

interface Props {
  allowedRoles: string[]
  allowedPermissions?: string[]
  children: ReactNode
}

const ProtectedRoute = ({
  allowedRoles,
  allowedPermissions,
  children
}: Props) => {
  const { accessToken, isLoggedIn, roles } = useSelector(
    (state: RootState) => state.auth.auth
  )

  if (!isLoggedIn || !allowedRoles.includes(roles || '')) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoute
