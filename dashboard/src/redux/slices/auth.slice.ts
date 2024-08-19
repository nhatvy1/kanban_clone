import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instanceNonAuth from '../../configs/axios.non.auth'

interface AuthSliceState {
  isLoggedIn: boolean
  token: string | null
}

const initialState: AuthSliceState = {
  isLoggedIn: false,
  token: null
}

export const login = createAsyncThunk(
  'auth/login',
  async (login: any, { rejectWithValue }) => {
    try {
      const response = await instanceNonAuth.post('auth/login', login)
      return response
    } catch (e) {
      rejectWithValue(e)
    }
  }
)


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      console.log('logout')
    }
  }
})

export const { logout } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer