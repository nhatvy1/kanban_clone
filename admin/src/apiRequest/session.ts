import http from '@/lib/http'

interface IGetSession {
  cookies: string 
}

export const getSession = async () =>
  http.get<IGetSession>('api/getCookies', { baseUrl: '' })
