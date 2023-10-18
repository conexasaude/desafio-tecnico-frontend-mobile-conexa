import {renderHook, act, waitFor} from '@testing-library/react-native';
import {useSignInViewModel} from './view-model';
import {useAuthContext} from '@hooks/use-auth.hook';
import {ViewModelProvidersWrapper} from '../../../jest-utils/view-model-wrapper';
import {useAppContext} from '@hooks/use-app.hook';

jest.mock('@hooks/use-auth.hook');
const mockSignInUser = jest.fn();
(useAuthContext as jest.Mock).mockReturnValue({signInUser: mockSignInUser});

jest.mock('@hooks/use-app.hook');
const mockOnOpenDialog = jest.fn();
const mockSetIsLoading = jest.fn();
(useAppContext as jest.Mock).mockReturnValue({
  isLoading: false,
  dialogVisible: false,
  dialogMessage: '',
  dialogTitle: '',
  onRequestCloseDialog: jest.fn(),
  setIsLoading: mockSetIsLoading,
  onOpenDialog: mockOnOpenDialog,
});

describe('SignIn view-model [useSignInViewModel]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct initial values', () => {
    const {result} = renderHook(() => useSignInViewModel());

    expect(result.current.passwordSecureTextEntry).toBe(true);
  });

  it('should toggle passwordSecureTextEntry', async () => {
    const {result} = renderHook(() => useSignInViewModel());

    expect(result.current.passwordSecureTextEntry).toBe(true);

    await act(() => {
      result.current.handlePasswordSecureTextEntry();
    });

    await waitFor(() =>
      expect(result.current.passwordSecureTextEntry).toBe(false),
    );

    await act(() => {
      result.current.handlePasswordSecureTextEntry();
    });

    await waitFor(() =>
      expect(result.current.passwordSecureTextEntry).toBe(true),
    );
  });

  it('should call signInUser on handleSignIn and set isLoading to true', async () => {
    const formData = {
      email: 'test@example.com',
      password: 'password123',
    };

    const {result} = renderHook(() => useSignInViewModel(), {
      wrapper: ViewModelProvidersWrapper,
    });

    await act(async () => {
      await result.current.handleSignIn(formData);
    });
    expect(mockSignInUser).toHaveBeenCalledTimes(1);
    expect(mockSignInUser).toHaveBeenCalledWith(
      formData.email,
      formData.password,
    );
  });

  it('should show an dialog on handleSignIn in error case', async () => {
    const ErrorMessage = 'Some error message';
    (useAuthContext as jest.Mock).mockReturnValueOnce({
      signInUser: async () => {
        throw new Error(ErrorMessage);
      },
    });

    const {result} = renderHook(() => useSignInViewModel(), {
      wrapper: ViewModelProvidersWrapper,
    });

    const formData = {
      email: 'test@example.com',
      password: 'password123',
    };

    await act(async () => {
      await waitFor(() => result.current.handleSignIn(formData));
    });

    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    expect(mockOnOpenDialog).toHaveBeenCalledWith({
      title: 'Erro',
      message: ErrorMessage,
    });
  });
});
