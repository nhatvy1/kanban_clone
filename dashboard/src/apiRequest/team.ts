import { http } from "@/configs/http"
import { IResponseGetTeam } from "@/types/team.type"

export const fetchTeams = async(filter: string)=> {
  const res = await http.get<any, IResponseGetTeam>(`team/get?${filter}`)
  return res
}