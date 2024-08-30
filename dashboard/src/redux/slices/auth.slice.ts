import { IUser } from '@/types/auth.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initial_state_localstorage = (key: string) => {
  const item = window.localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

const initial_state_isLoggedIn = (key: string) => {
  const item = window.localStorage.getItem(key)
  return item ? !!item : false
}

interface AuthSliceState {
  accessToken: string | null
  refreshToken: string | null
  role: string | null
  permissions: { [key: string]: string[] } | null
  loading: boolean
}

interface PayloadLogin {
  user: IUser
  access_token: string
  refresh_token: string
}

const initialState: AuthSliceState = {
  accessToken: initial_state_localstorage('accessToken'),
  refreshToken: initial_state_localstorage('refreshToken'),
  role: initial_state_localstorage('role'),
  permissions: initial_state_localstorage('permissions'),
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

      localStorage.removeItem('accessToken')
      localStorage.removeItem('permissions')
      localStorage.removeItem('role')
    },
    handleLogin(state, action: PayloadAction<PayloadLogin>) {
      state.accessToken = action.payload.access_token
      state.refreshToken = action.payload.refresh_token
      state.role = action.payload.user.role.slug
      state.permissions = action.payload.user.permissions

      localStorage.setItem('accessToken', action.payload.access_token)
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
    }
  }
})

export const { handleLogout, handleLogin } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
