import instanceNonAuth from '@/configs/axios.non.auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface UserSliceState {
  loading: boolean
  listUsers: any
}

const initialState: UserSliceState = {
  loading: false,
  listUsers: []
}

export const getListUsers = createAsyncThunk(
  'user/getListUser',
  async (filter: string, { rejectWithValue }) => {
    try {
      const response = await instanceNonAuth.get(`/user`)
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue(e)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListUsers.pending, (state, action)=> {
        
      })
  }
})
