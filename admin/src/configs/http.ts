import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { toast } from 'react-toastify'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest'
}

class Http {
  private instance: AxiosInstance | null = null

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: 'http://localhost:5000/api/v1/',
      headers,
      withCredentials: true
    })

    http.interceptors.request.use(
      function (config: any) {
        const token = localStorage.getItem('accessToken')
        config.headers = {
          authorization: token ? `Bearer ${JSON.parse(token)}` : null
        }

        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    http.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        const { response } = error
        return this.handleError(response)
      }
    )

    this.instance = http
    return http
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config)
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config)
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config)
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config)
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config)
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: AxiosResponse) {
    const { status } = error

    switch (status) {
      case StatusCode.InternalServerError: {
        // toast.info('Internal server error')
        console.log(StatusCode.InternalServerError)
        break
      }
      case StatusCode.Forbidden: {
        console.log(StatusCode.Forbidden)
        // toast.info(`You don't access to api`)
        break
      }
      case StatusCode.Unauthorized: {
        const { url } = error.config
        if (error.status === StatusCode.Unauthorized && url !== 'auth/login') {
          toast.info('Login session expires')
        }
        return Promise.reject(
          error?.data?.message || 'Please entry again later'
        )
      }
      case StatusCode.TooManyRequests: {
        toast.info('Error too many request')
        break
      }
      case StatusCode.NotFound: {
        toast.info('Api not found')
        break
      }
    }

    return Promise.reject(error.data)
  }
}

export const http = new Http()
