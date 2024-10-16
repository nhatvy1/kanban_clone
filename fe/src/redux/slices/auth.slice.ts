import { IUser } from '@/types/auth.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initial_state_localstorage = (key: string) => {
  const item = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

interface AuthSliceState {
  accessToken: string | null
  refreshToken: string | null
  user: IUser | null | undefined
  loading: boolean
}

interface PayloadLogin {
  user: any
  access_token: string
  refresh_token: string
}

const initialState: AuthSliceState = {
  accessToken: initial_state_localstorage('accessToken'),
  refreshToken: initial_state_localstorage('refreshToken'),
  user: initial_state_localstorage('user'),
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout(state) {
      state.accessToken = null
      state.refreshToken = null
      state.user = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
    },
    handleLogin(state, action: PayloadAction<PayloadLogin>) {
      console.log(action.payload)
      state.accessToken = action.payload.access_token
      state.refreshToken = action.payload.refresh_token
      state.user = action.payload.user
      
      localStorage.setItem(
        'accessToken',
        JSON.stringify(action.payload.access_token)
      )
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(action.payload.refresh_token)
      )
      localStorage.setItem(
        'user',
        JSON.stringify(state.user)
      )
    }
  }
})

export const { handleLogout, handleLogin } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
