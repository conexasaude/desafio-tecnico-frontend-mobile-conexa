import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/user.slice';
import { appointmentSlice } from './slices/appointment.slice';

export const globalReducer = {
  user: userSlice.reducer,
  appointment: appointmentSlice.reducer,
};

export const reducers = combineReducers(globalReducer);

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
