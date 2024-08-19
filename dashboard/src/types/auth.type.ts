export interface IUser {
  id: number
  email: string
  role: {
    id: number
    name: string
    slug: string
  }
  permissions: { [key: string]: string[] }
}

export interface IResLogin {
  message: string
  statusCode: string
  result: {
    user: IUser
    access_token: string
    refresh_token: string
  }
}

export interface IFormLogin {
  email: string
  password: string
}
