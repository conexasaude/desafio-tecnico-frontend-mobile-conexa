import { RenderHookResult, act, renderHook, waitFor } from '@testing-library/react-native';
import { UserContextType, UserProvider } from './UserContext';
import { useUser } from '../hooks/useUser';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('../services/auth', () => ({
  auth: async (email: string, password: string) => ({
    nome: 'Username',
    token: 'Token',
  })
}))

describe('Context: UserContext', () => {
  let renderHookResult: RenderHookResult<UserContextType, unknown>

  beforeEach(async () => {
    renderHookResult = renderHook(() => useUser(), { wrapper: UserProvider })
    await waitFor(() => act(() => renderHookResult.result.current.getAuthUser("example@email.com", "password")))
  })

  it('should store user data', async () => {
    expect(renderHookResult.result.current.user?.nome).toBe("Username")
  })

  it('should clear user data', async () => {
    await waitFor(() => act(() => renderHookResult.result.current.logout()))
    expect(renderHookResult.result.current.user).toBe(null)
  })
})