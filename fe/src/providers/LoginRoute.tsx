import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { RootState } from '@/redux/store'


interface Props {
  children: ReactNode
}
const LoginRoute = ({ children }: Props) => {
  const { accessToken } = useSelector((state: RootState) => state.auth)

  if (accessToken) {
    return <Navigate to='/userworkspace' />
  }
  return children
}

export default LoginRoute
