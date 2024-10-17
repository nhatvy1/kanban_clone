export interface IProject {
  id: number
  name: string
  description?: string
}

export interface IResponseListProject {
  statusCode: number
  message: string
  result: IProject[]
}
