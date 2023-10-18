import {renderHook, act, waitFor} from '@testing-library/react-native';
import {useHomeViewModel} from './view-model';
import {useAuthContext} from '@hooks/use-auth.hook';
import {ViewModelProvidersWrapper} from '../../../jest-utils/view-model-wrapper';
import {useAppContext} from '@hooks/use-app.hook';
import {UserModel} from '@models/user.model';

jest.mock('@hooks/use-auth.hook');
const mockUser = {
  nome: 'John Doe',
  email: 'john.doe@gmail.com',
  signOut: jest.fn(),
} as UserModel;
(useAuthContext as jest.Mock).mockReturnValue({
  user: mockUser,
});

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

describe('Home view-model [useHomeViewModel]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should return the correct initial values', () => {
    const {result} = renderHook(() => useHomeViewModel());

    expect(result.current.refresh).toBe(false);
    expect(result.current.appointments).toEqual([]);
    expect(result.current.user).toEqual(mockUser);
  });

  it('should call getAppointments', async () => {
    const {result} = renderHook(() => useHomeViewModel(), {
      wrapper: ViewModelProvidersWrapper,
    });

    await act(async () => {
      await result.current.getAppointments(false);
    });
    await waitFor(() => expect(mockSetIsLoading).toBeCalled());
  });

  it('should call handleSignOut', async () => {
    const {result} = renderHook(() => useHomeViewModel(), {
      wrapper: ViewModelProvidersWrapper,
    });

    await act(async () => {
      await result.current.handleSignOut();
    });
    await waitFor(() => expect(mockSetIsLoading).toBeCalled());
  });
});
