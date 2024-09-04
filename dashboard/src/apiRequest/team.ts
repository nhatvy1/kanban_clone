import { http } from "@/configs/http"
import { IFormTeam, IResponseCreateTeam, IResponseGetTeam } from "@/types/team.type"

export const fetchTeams = async(filter: string)=> {
  const res = await http.get<any, IResponseGetTeam>(`team/get?${filter}`)
  return res
}

export const createTeam = async(data: { name: string})=> {
  const res = await http.post<IFormTeam, IResponseCreateTeam>('team/create', data)
  return res
}