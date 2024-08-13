import { IResponseLogin } from '@/types/auth.type'
import { normalizePath } from './normalize'
import auth from '@/apiRequest/auth'
import { API_URL, ERROR_STATUS } from './variable'
import { toast } from 'sonner'

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

export class HttpError extends Error {
  payload: {
    message: string
    statusCode: number
    [key: string]: any
  }

  constructor({ payload }: { payload: any }) {
    super(payload?.message || 'Hệ thống bảo trì', { cause: payload })
    this.payload = payload
  }
}

let clientLogoutRequest: null | Promise<any> = null
export const isClient = () => typeof window !== 'undefined'

const request = async <Response>(
  method: 'POST' | 'PUT' | 'GET' | 'DELETE' | 'PATCH',
  url: string,
  options?: CustomOptions
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders: {
    [key: string]: string
  } = {
    'Content-Type': 'application/json'
  }
  if (isClient()) {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      baseHeaders.Authorization = `Bearer ${accessToken}`
    }
  }

  const baseUrl = options?.baseUrl === undefined ? API_URL : options.baseUrl
  // validate url
  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    body,
    method
  })

  const payload: Response = await res.json()

  if (!res.ok) {
    if (res.status === ERROR_STATUS.AUTHENTICATION) {
      if (
        isClient() &&
        !['auth/login'].some((item) => item === normalizePath(url))
      ) {
        try {
          await auth.logoutNextClientToNextServer()
          console.log('LOi 401')
        } catch (e) {
        } finally {
          if (isClient()) {
            localStorage.removeItem('accessToken')
            clientLogoutRequest = null
            location.href = '/login'
            toast.info('Phiên đăng nhập hết hạn')
          }
        }
      } else {
        throw new HttpError({ payload })
      }
    } else {
      throw new HttpError({ payload })
    }
  }

  // Ensure logic only runs on the client side (browser)
  if (isClient()) {
    if (['auth/login'].some((item) => item === normalizePath(url))) {
      const access_token = (payload as IResponseLogin).result.access_token
      localStorage.setItem('accessToken', access_token)
    } else if ('api/auth/logout' === normalizePath(url)) {
      localStorage.removeItem('accessToken')
    }
  }

  return payload
}

const http = {
  get<Response>(
    url: string,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) {
    return request<Response>('GET', url, options)
  },
  post<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) {
    return request<Response>('POST', url, { ...options, body })
  },
  put<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) {
    return request<Response>('PUT', url, { ...options, body })
  },
  delete<Response>(
    url: string,
    body: any,
    options?: Omit<CustomOptions, 'body'> | undefined
  ) {
    return request<Response>('DELETE', url, { ...options, body })
  }
}

export default http
