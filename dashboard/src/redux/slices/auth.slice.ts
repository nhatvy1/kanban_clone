import { IUser } from '@/types/auth.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initial_state_localstorage = (key: string) => {
  const item = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

interface AuthSliceState {
  accessToken: string | null
  refreshToken: string | null
  role: string | null
  permissions: { [key: string]: string[] } | null
  user: any
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
  role: initial_state_localstorage('role'),
  permissions: initial_state_localstorage('permissions'),
  user: initial_state_localstorage('user'),
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleLogout(state) {
      state.accessToken = null
      state.permissions = null
      state.role = null
      state.refreshToken = null
      state.user = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('permissions')
      localStorage.removeItem('role')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('user')
    },
    handleLogin(state, action: PayloadAction<PayloadLogin>) {
      state.accessToken = action.payload.access_token
      state.refreshToken = action.payload.refresh_token
      state.role = action.payload.user.role.slug
      state.user = {
        fullName: action.payload.user?.fullName,
        email: action.payload.user?.email
      }
      state.permissions = action.payload.user.permissions

      localStorage.setItem(
        'accessToken',
        JSON.stringify(action.payload.access_token)
      )
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(action.payload.refresh_token)
      )
      localStorage.setItem(
        'role',
        JSON.stringify(action.payload.user.role.slug)
      )
      localStorage.setItem(
        'permissions',
        JSON.stringify(action.payload.user.permissions)
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
