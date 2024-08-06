export interface IFormLogin {
  email: string
  password: string
}

export interface IResponseLogin {
  message: string
  statusCode: number
  result: {
    user: {
      id: number,
      email: string
    },
    access_token: string
    refresh_token: string
  }
}

export interface IResponseRefreshToken {
  message: string,
  statusCode: number,
  result: {
    access_token: string,
    refresh_token: string
  }
}

export interface IFormRegister {
  email: string
  password: string
  fullName: string
}