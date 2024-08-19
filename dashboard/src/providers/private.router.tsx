import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'


interface Props {
  children: ReactNode
}
const PrivateRoute = ({ children }: Props) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  if (isLoggedIn) {
    return <Navigate to='/' />
  }
  return children
}

export default PrivateRoute
