import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/user';
import { login } from '../thunks/user.thunk';

interface State {
  loading: boolean;
  error?: string;
  user?: User;
}

const initialState: State = {
  loading: false,
  error: undefined,
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    rememberLogin: (state, { payload }: PayloadAction<User>) => ({
      ...state,
      user: payload,
    }),

    loggout: () => ({
      loading: false,
      error: undefined,
      user: undefined,
    }),
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state, _) => {
      state.loading = true;
      state.error = undefined;
      state.user = undefined;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});
