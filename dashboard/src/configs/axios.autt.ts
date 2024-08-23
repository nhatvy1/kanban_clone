import { handleLogout } from '@/redux/slices/auth.slice'
import { store } from '@/redux/store'
import { HttpStatusEnum } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'react-toastify'

export const API_URL = 'http://localhost:5000/api/v1'
export const REQUEST_TIMEOUT = 5000
const instance = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    const token = localStorage.getItem('accessToken')
    config.headers = {
      authorization: token ? `Bearer ${JSON.parse(token)}` : null
    }

    return config
  },
  function (error) {
    console.log('Check error: ', error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response: any) {
    return response
  },
  function (error) {
    const { url } = error.config
    if (
      error.response.status === HttpStatusEnum.AUTHORIZATION &&
      url !== '/auth/login'
    ) {
      toast.info('Login session expired')
      store.dispatch(handleLogout())
    }
    return Promise.reject(error?.response?.data)
  }
)

export default instance
