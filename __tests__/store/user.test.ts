import MockAdapter from 'axios-mock-adapter';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { api } from '@/lib/axios';
import { Dispatch } from 'react';
import { User } from '@/models/user';
import { userSlice } from '@/store/slices/user.slice';
import { login } from '@/store/thunks/user.thunk';

const mockedUser: { data: User } = {
  data: {
    nome: 'Maria Brown',
    email: 'maria@gmail.com',
    token: '1',
  },
};

describe('userSlice', () => {
  let store: EnhancedStore;
  let mockAxios: MockAdapter;

  beforeEach(() => {
    store = configureStore({
      reducer: { user: userSlice.reducer },
    });

    mockAxios = new MockAdapter(api);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('should handle login success', async () => {
    const mockOnSuccess = jest.fn();
    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onPost('/api/login').reply(200, mockedUser);

    await dispatch(
      login({
        data: {
          email: 'maria@example.com',
          password: 'password',
        },
        onSuccess: mockOnSuccess,
      }),
    );

    const state = store.getState().user;

    expect(state.loading).toBe(false);
    expect(state.error).toBeUndefined();
    expect(state.user).toEqual(mockedUser.data);
    expect(mockOnSuccess).toHaveBeenCalled();
  });

  test('should handle login failure and use rejectWithValue', async () => {
    const mockOnError = jest.fn();
    const errorMessage = 'Request failed with status code 500';

    const dispatch = store.dispatch as Dispatch<any>;

    mockAxios.onPost('/api/login').reply(500, { error: errorMessage });

    await dispatch(
      login({
        data: {
          email: 'invalid@email.com',
          password: 'wrongpassword',
        },
        onError: mockOnError,
      }),
    );

    const state = store.getState().user;
    expect(state.loading).toBe(false);
    expect(state.error).toEqual(errorMessage);
    expect(state.user).toBeUndefined();
    expect(mockOnError).toHaveBeenCalled();
  });

  test('should handle loggout success', () => {
    const reducerLogout = userSlice.reducer(
      undefined,
      userSlice.actions.loggout(),
    );

    expect(reducerLogout).toEqual({
      loading: false,
      error: undefined,
      user: undefined,
    });
  });

  test('should handle remember login success', () => {
    const reducerRememberLogin = userSlice.reducer(
      undefined,
      userSlice.actions.rememberLogin(mockedUser.data),
    );

    expect(reducerRememberLogin).toEqual({
      loading: false,
      error: undefined,
      user: mockedUser.data,
    });
  });
});
