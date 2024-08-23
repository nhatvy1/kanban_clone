import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { RootState } from '@/redux/store'


interface Props {
  children: ReactNode
}
const LoginRoute = ({ children }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  if (isLoggedIn) {
    return <Navigate to='/' />
  }
  return children
}

export default LoginRoute
