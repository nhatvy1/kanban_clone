export interface IRole {
  id: number
  name: string
  slug: string
}

export interface IResponseRoles {
  message: string
  statusCode: number
  result: IRole[]
}