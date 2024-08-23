import { RootState } from '@/redux/store'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const AuthenticationRoute = ({
  children
}: Props) => {
  const { isLoggedIn, } = useSelector(
    (state: RootState) => state.auth
  )

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default AuthenticationRoute
