import { ActionEnum } from 'src/module/permission/permission.entity'

export interface Tokens {
  access_token: string
  refresh_token: string
}

export interface TokenVerify {
  userId: number
  role: string
  permission: { [key: string]: ActionEnum[] } | {}
  iat: number
  exp: number
  refreshToken: string
}
