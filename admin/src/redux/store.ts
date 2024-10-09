import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './slices/layout.slice'
import authReducer from './slices/auth.slice'
import { teamReducer } from './slices/team.slice'
import { teamApi } from './query/team.query'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    team: teamReducer,
    [teamApi.reducerPath]: teamApi.reducer
  },
  // Thêm middleware để enable các tính năng caching, invalidation, polling của rtk query
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(teamApi.middleware)
  }
})

// Optional, nhưng bắt buộc nếu dùng tính nằng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
