import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth.slice'

export const globalReducer = {
  auth: authSlice.reducer,
}

export const reducers = combineReducers(globalReducer)

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
