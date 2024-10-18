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

export interface IFormCreateProject {
  name: string
  description: string
}

export interface IFormUpdateProject {
  name?: string
  description?: string
}

export interface IResponseUpdateProject {
  statusCode: number
  message: string
  result: IProject
}

export interface IResponseCreateProject {
  statusCode: number
  message: string
  result: IProject
}

export interface IResponseDeleteProject {
  statusCode: number
  message: string
  result: number
}
