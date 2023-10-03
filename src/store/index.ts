import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const globalReducer = {};

export const reducers = combineReducers(globalReducer);

export type RootState = ReturnType<typeof reducers>;

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
