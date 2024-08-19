interface Props {
  allowedRoles: string[]
  allowedPermissions: string[]
}

const ProtectedRoute = ({ allowedRoles, allowedPermissions }: Props) => {
  console.log(allowedPermissions, allowedRoles)
  return <div></div>
}

export default ProtectedRoute
