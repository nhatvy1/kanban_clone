import { error } from 'console'

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

class HttpError extends Error {
  payload: {
    message: string
    [key: string]: any
  }

  constructor({ payload }: { payload: any }) {
    super(payload?.message || 'Hệ thống bảo trì', { cause: payload })
    this.payload = payload
  }
}

const BACKEND_URL = 'http://localhost:5000/api/v1'

const request = async <Response>(
  method: 'POST' | 'PUT' | 'GET' | 'DELETE' | 'PATCH',
  url: string,
  options?: CustomOptions
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json'
  }
  const baseUrl = options?.baseUrl === undefined ? BACKEND_URL : options.baseUrl
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
    throw new HttpError({ payload })
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
