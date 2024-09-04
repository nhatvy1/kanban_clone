export interface ITeam {
  id: string
  name: string
  createdAt: string
}

export interface IResponseGetTeam {
  message: string
  statusCode: string
  result: ITeam[]
}

export interface IResponseCreateTeam {
  message: string
  statusCode: string
  result: ITeam
}

export interface IFormTeam {
  name: string
}