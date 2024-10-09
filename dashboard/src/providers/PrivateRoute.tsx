interface Props {
  allowedRoles: string
  allowedPermissions?: { [key: string]: string[] }
}

const PrivateRoute = ({ allowedRoles, allowedPermissions }: Props) => {
  console.log(allowedPermissions, allowedRoles)
  return <div></div>
}

export default PrivateRoute
