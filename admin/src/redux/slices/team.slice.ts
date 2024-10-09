import { fetchTeams } from '@/apiRequest/team'
import { http } from '@/configs/http'
import { IResponseGetTeam, ITeam } from '@/types/team.type'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface TeamSliceState {
  loading: boolean
  listTeams: ITeam[]
}

const initialState: TeamSliceState = {
  loading: false,
  listTeams: []
}

export const getListTeams = createAsyncThunk(
  'team/getListTeams',
  async (filter: string, { rejectWithValue }) => {
    try {
      const response = await fetchTeams(`team/get?${filter}`)
      return response
    } catch (e) {
      console.log(e)
      return rejectWithValue(e)
    }
  }
)

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    clearListTeams(state) {
      state.listTeams = []
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getListTeams.pending, (state) => {
        state.loading = true
      })
      .addCase(getListTeams.fulfilled, (state, action) => {
        state.loading = false
        state.listTeams = action.payload.result
      })
      .addCase(getListTeams.rejected, (state) => {
        state.loading = false
      })
  }
})

export const { clearListTeams } = teamSlice.actions
export const teamReducer = teamSlice.reducer
