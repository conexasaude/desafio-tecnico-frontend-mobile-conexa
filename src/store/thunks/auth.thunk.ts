import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from '@http-client'

interface AuthCredentials {
  email: string
  password: string
}

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (credentials: AuthCredentials, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.post('/api/login', {
        email: credentials.email,
        senha: credentials.password,
      })

      return data
    } catch (error) {
      return rejectWithValue('Erro desconhecido ao autenticar.')
    }
  },
)
