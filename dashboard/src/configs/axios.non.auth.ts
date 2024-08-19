import axios, { AxiosError, AxiosResponse } from 'axios'

export const API_URL = 'http://localhost:5000/api/v1'
const instanceNonAuth = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instanceNonAuth.interceptors.response.use(
  function (response: AxiosResponse) {
    return response
  },
  function (error: AxiosError) {
    return Promise.reject(error?.response?.data)
  }
)

export default instanceNonAuth
