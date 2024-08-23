import axios, { AxiosInstance } from 'axios'

export const API_URL = 'http://localhost:5000/api/v1'
export const REQUEST_TIMEOUT = 5000

class Http {
  instance: AxiosInstance
  private accessToken: string | null
  private refreshToken: string | null

  constructor() {
    this.accessToken = localStorage.getItem('accessToken')
    this.refreshToken = localStorage.getItem('refreshToken')
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers && this.accessToken) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        const data = response.data

        if (url === '/auth/sign-up' || url === '/auth/sign-in') {
          this.accessToken = data?.accessToken				

          this.refreshToken = data?.refreshToken
        } else if (url === '/auth/logout') {
          this.accessToken = null
          this.refreshToken = null
          // clear accessToken localstorage
        }
        return response
      },

      async (error) => {
        return Promise.reject(error)
      }
    )
  }
}

const instanceNonAuth = new Http().instance
export default instanceNonAuth
