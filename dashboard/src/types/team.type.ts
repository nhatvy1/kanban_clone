export interface ITeam {
  id: string
  name: string
}

export interface IResponseGetTeam {
  message: string
  statusCode: string
  result: ITeam[]
}