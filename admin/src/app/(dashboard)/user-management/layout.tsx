import { ReactNode } from 'react'

const UserManagementLayout = ({
  children,
  create
}: {
  children: ReactNode
  create: ReactNode
}) => {
  return (
    <>
      {create}
      {children}
    </>
  )
}

export default UserManagementLayout
