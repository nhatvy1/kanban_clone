import { ActionEnum } from 'src/module/permission/permission.entity'

export interface JwtPayload {
  userId: number
  role: string
  permissions: { [key: string]: ActionEnum[] } | {}
}
