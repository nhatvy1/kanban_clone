import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const Authentication = ({
  children
}: Props) => {
  const { accessToken } = useSelector(
    (state: RootState) => state.auth
  )

  console.log(accessToken)

  if (!accessToken) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default Authentication
