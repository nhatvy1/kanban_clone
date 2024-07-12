export interface IFormLogin {
  email: string
  password: string
}

export interface IResponseLogin {
  message: string
  statusCode: number
  result: any
}

export interface IFormRegister {
  email: string
  password: string
  fullName: string
}