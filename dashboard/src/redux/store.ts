import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './slices/layout.slice'
import authReducer from './slices/auth.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
