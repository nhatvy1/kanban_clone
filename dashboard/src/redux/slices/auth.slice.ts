import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/auth.type'

interface AuthSliceState {
  isLoggedIn: boolean
  accessToken: string | undefined
  refreshToken: string | undefined
  roles: string | undefined
  permissions: { [key: string]: string[] } | undefined
  loading: boolean
}

const initialState: AuthSliceState = {
  isLoggedIn: false,
  accessToken: undefined,
  refreshToken: undefined,
  roles: undefined,
  permissions: undefined,
  loading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      console.log('logout')
    },
    login(state, payload: PayloadAction<any>) {
      state.accessToken = payload?.payload.accessToken
      state.refreshToken = payload?.payload.refresh_token
      state.roles = payload.payload.user.role.slug
      state.permissions = payload.payload.user.permissions
      state.isLoggedIn = true
    }
  }
})

export const { logout, login } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
