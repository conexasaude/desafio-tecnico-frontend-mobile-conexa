import { useAsyncStorage } from '@/hooks/useAsyncStorage';
import { api } from '@/lib/axios';
import { ThunkCallback } from '@/lib/utils';
import { FormLogin } from '@/validations/login';
import { User } from '@/models/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginDTO extends ThunkCallback {
  data: FormLogin;
}

export const login = createAsyncThunk(
  '/api/login',
  async ({ data, onSuccess, onError }: LoginDTO, { rejectWithValue }) => {
    const { save } = useAsyncStorage();

    try {
      const { data: response } = await api.post<{ data: User }>('/api/login', {
        email: data.email,
        senha: data.password,
      });

      await save('user', response.data);

      onSuccess && onSuccess();
      return response.data;
    } catch (error: any) {
      onError && onError(error.message);
      return rejectWithValue(error.message);
    }
  },
);
