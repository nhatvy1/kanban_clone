import instanceNonAuth from '../configs/axios.non.auth'
import { IFormLogin, IResLogin } from '../types/auth.type'

const auth = {
  login: async (data: IFormLogin) => {
    const res = await instanceNonAuth.post<IResLogin>('auth/login', data)
    return res.data
  }
}

export default auth
