import http from "@/lib/http"
import { IFormLogin, IResponseLogin } from "@/types/auth.type"

export const login = async(data: IFormLogin)=> {
  const res = await http.post<IResponseLogin>('auth/login', data)
  return res
}
