export interface IUser {
  id: number
  email: string
  fullName: string
  avatar: string
  createdAt: string
  status: number
}

export default interface IResponseListUser  {
  statusCode: number
  message:string
  result: {
    result: IUser[]
    totalResults: number
    limit: number
    page: number
  }
}