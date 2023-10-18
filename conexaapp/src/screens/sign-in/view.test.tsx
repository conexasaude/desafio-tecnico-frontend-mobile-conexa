import {
  act,
  fireEvent,
  render,
  renderHook,
} from '@testing-library/react-native';
import {SignIn} from './view';
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
import * as yup from 'yup';
import {SignInViewModel, useSignInViewModel} from './view-model';
import {ViewProviderWrapper} from '../../../jest-utils/wrapper';

jest.mock('./view-model');
jest.mock('@assets/eye-close.svg', () => 'EyeCloseSvg');
jest.mock('@assets/eye-open.svg', () => 'EyeOpenSvg');
jest.mock('@assets/logo-conexa.svg', () => 'LogoSvg');

const signInSchema = yup.object({
  email: yup.string().required('Informe o email.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.'),
});

type FormDataProps = yup.InferType<typeof signInSchema>;

interface CreateMockSignInView {
  control: Control<FormDataProps>;
  handleSubmit: UseFormHandleSubmit<FormDataProps>;
  errors: FieldErrors<FormDataProps>;
  passwordSecureTextEntry?: boolean;
}

const createMockLoginViewModel = ({
  passwordSecureTextEntry,
  control,
  handleSubmit,
  errors,
}: CreateMockSignInView): SignInViewModel => ({
  control,
  handleSubmit,
  errors,
  passwordSecureTextEntry: passwordSecureTextEntry ?? true,
  handleSignIn: jest.fn(),
  handlePasswordSecureTextEntry: jest.fn(),
});

interface FactoryProps {
  passwordSecureTextEntry?: boolean;
  isLoading?: boolean;
  email?: string;
  password?: string;
}

function makeSut({
  passwordSecureTextEntry = true,
  email,
  password,
}: FactoryProps) {
  const {result} = renderHook(() => useForm<FormDataProps>());
  const errors = result.current.formState.errors;
  const control = result.current.control;

  if (email) {
    control._defaultValues.email = email;
  }

  if (password) {
    control._defaultValues.password = password;
  }

  const mockHandleSubmit = jest.fn();

  const mockLoginViewModel = createMockLoginViewModel({
    passwordSecureTextEntry,
    control,
    handleSubmit: mockHandleSubmit,
    errors,
  });
  (useSignInViewModel as jest.Mock).mockReturnValueOnce(mockLoginViewModel);

  const sut = render(
    <ViewProviderWrapper>
      <SignIn />
    </ViewProviderWrapper>,
  );

  return {...sut, ...mockLoginViewModel, result};
}

describe('SignIn view', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const {toJSON} = makeSut({});

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with email', async () => {
    const email = 'test@example.com';

    const {toJSON, findByPlaceholderText} = makeSut({
      email,
    });

    const emailInput = await findByPlaceholderText('jose@gmail.com');

    expect(emailInput.props.value).toEqual(email);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with password', async () => {
    const password = '123456';

    const {toJSON, findByPlaceholderText} = makeSut({password});

    const passwordInput = await findByPlaceholderText('Digite aqui sua senha');
    expect(passwordInput.props.value).toEqual(password);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with password with secure text entry off', async () => {
    const {toJSON, findByPlaceholderText} = makeSut({
      passwordSecureTextEntry: false,
    });

    const passwordInput = await findByPlaceholderText('Digite aqui sua senha');
    expect(passwordInput.props.passwordSecureTextEntry).toBeFalsy();

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call handleSubmit when "Acessar conta" button is pressed', async () => {
    const {findByText, handleSubmit, handleSignIn} = makeSut({});

    const enterButton = await findByText('Acessar conta');

    await act(() => {
      fireEvent.press(enterButton);
    });

    expect(handleSubmit).toHaveBeenCalledWith(handleSignIn);
  });
});
