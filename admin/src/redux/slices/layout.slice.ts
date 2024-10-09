import { createSlice } from '@reduxjs/toolkit'

interface LayoutSliceState {
  isOpenSidebar: boolean
}

const initialState: LayoutSliceState = {
  isOpenSidebar: true
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    handleSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar
    }
  }
})

export const { handleSidebar } = layoutSlice.actions
const layoutReducer = layoutSlice.reducer
export default layoutReducer
