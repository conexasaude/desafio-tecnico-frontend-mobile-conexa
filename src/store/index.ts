import AsyncStorage from '@react-native-async-storage/async-storage'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/auth.reducer'
import {
  appointmentsReducer,
  appointmentReducer,
} from './reducers/appointment.reducer'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
}

const reducer = combineReducers({
  auth: authReducer,
  appointments: appointmentsReducer,
  appointment: appointmentReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof persistedReducer>
export type AppDispatch = typeof store.dispatch
