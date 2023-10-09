import { User } from '@models/user'
import { createSlice } from '@reduxjs/toolkit'
import { authenticateUser } from '../thunks/auth.thunk'

interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true
      state.error = null
      state.user = null
    })

    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })

    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})
