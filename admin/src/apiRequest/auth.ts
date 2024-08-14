import http from '@/lib/http'
import {
  IFormLogin,
  IResponseLogin,
} from '@/types/auth.type'

const auth = {
  login: (data: IFormLogin) => http.post<IResponseLogin>('/auth/login', data),
  authSetCookie: async ({
    accessToken,
  }: {
    accessToken: string
  }) => {
    const body = { accessToken }

    const res = await http.post('api/auth', body, {
      baseUrl: ''
    })
    return res
  },
  logoutNextClientToNextServer: async () =>
    http.post('api/auth/logout', null, { baseUrl: '' })
}

export default auth
