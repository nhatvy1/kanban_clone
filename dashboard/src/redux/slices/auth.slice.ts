import { createSlice } from '@reduxjs/toolkit'

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
    login(state, payload) {
      console.log('Check: ', payload)
      // state.loading = false
      // state.accessToken = payload?.result.access_token
      // state.refreshToken = payload?.result.refresh_token
      // state.roles = payload?.result.user.role.slug
      // state.permissions = payload?.result.user.permissions
      // state.isLoggedIn = true
    }
  }
})

export const { logout, login } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
