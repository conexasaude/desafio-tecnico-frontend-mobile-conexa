import {
  act,
  fireEvent,
  render,
  renderHook,
} from '@testing-library/react-native';
import {CreateAppointment} from './view';
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
import * as yup from 'yup';
import {
  CreateAppointmentViewModel,
  useCreateAppointmentViewModel,
} from './view-model';
import {ViewProviderWrapper} from '../../../jest-utils/wrapper';
import {UserModel} from '@models/user.model';
import {Header} from '@components/header';

jest.mock('./view-model');
jest.mock('@assets/chevron-left.svg', () => 'BackIconSVG');

const signInSchema = yup.object({
  patient: yup.string().required('Campo obrigatório.'),
  date: yup.string().required('Campo obrigatório.'),
  hour: yup.string().required('Campo obrigatório.'),
  description: yup.string().required('Campo obrigatório.'),
});

type FormDataProps = yup.InferType<typeof signInSchema>;

interface CreateMockCreateAppointmentView {
  user: UserModel;
  control: Control<FormDataProps>;
  errors: FieldErrors<FormDataProps>;
  handleSubmit: UseFormHandleSubmit<FormDataProps>;
  handleCreate: ({
    patient,
    date,
    hour,
    description,
  }: FormDataProps) => Promise<void>;
  handleGoBack: () => void;
}

const createMockCreateAppointmentViewModel = ({
  control,
  errors,
  handleSubmit,
  user,
}: CreateMockCreateAppointmentView): CreateAppointmentViewModel => ({
  user,
  control,
  errors,
  handleSubmit,
  handleCreate: jest.fn(),
  handleGoBack: jest.fn(),
});

interface FactoryProps {
  isLoading?: boolean;
  patient?: string;
  date?: string;
  hour?: string;
  description?: string;
  user?: UserModel;
}

const defaultMockedUser = {
  nome: 'John Doe',
  email: 'john.doe@gmail.com',
  signOut: jest.fn(),
} as unknown;

function makeSut({
  user = defaultMockedUser as UserModel,
  patient,
  date,
  hour,
  description,
}: FactoryProps) {
  const {result} = renderHook(() => useForm<FormDataProps>());
  const errors = result.current.formState.errors;
  const control = result.current.control;

  if (patient) {
    control._defaultValues.patient = patient;
  }

  if (date) {
    control._defaultValues.date = date;
  }

  if (hour) {
    control._defaultValues.hour = hour;
  }

  if (description) {
    control._defaultValues.description = description;
  }

  const mockCreateAppointmentViewModel = createMockCreateAppointmentViewModel({
    user,
    control,
    errors,
    handleSubmit: jest.fn(),
    handleCreate: jest.fn(),
    handleGoBack: jest.fn(),
  });
  (useCreateAppointmentViewModel as jest.Mock).mockReturnValueOnce(
    mockCreateAppointmentViewModel,
  );

  const sut = render(
    <ViewProviderWrapper>
      <CreateAppointment />
    </ViewProviderWrapper>,
  );

  return {...sut, ...mockCreateAppointmentViewModel, result};
}

describe('SignIn view', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const {toJSON} = makeSut({});

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with patient', async () => {
    const patient = 'Rilson Costa de Oliveira';

    const {toJSON, findByPlaceholderText} = makeSut({
      patient,
    });

    const patientInput = await findByPlaceholderText('jose@gmail.com');

    expect(patientInput.props.value).toEqual(patient);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with date', async () => {
    const date = '10/10/2030';

    const {toJSON, findByPlaceholderText} = makeSut({date});

    const dateInput = await findByPlaceholderText('Ex.: 10/12/2023');
    expect(dateInput.props.value).toEqual(date);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with hour', async () => {
    const hour = '10:10';

    const {toJSON, findByPlaceholderText} = makeSut({hour});

    const hourInput = await findByPlaceholderText('Ex.: 12:30');
    expect(hourInput.props.value).toEqual(hour);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with description', async () => {
    const description = 'Observações sobre o paciente';

    const {toJSON, findByPlaceholderText} = makeSut({description});

    const descriptionInput = await findByPlaceholderText(
      'Digite aqui as observações do paciente.',
    );
    expect(descriptionInput.props.value).toEqual(description);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call handleSubmit when "Agendar" button is pressed', async () => {
    const {findByText, handleSubmit, handleCreate} = makeSut({});

    const enterButton = await findByText('Agendar');

    await act(() => {
      fireEvent.press(enterButton);
    });

    expect(handleSubmit).toHaveBeenCalledWith(handleCreate);
  });

  it('should call handleGoBack when back button is pressed', async () => {
    const {UNSAFE_getByType, handleGoBack} = makeSut({});

    const backButton = await UNSAFE_getByType(Header.Button);

    await act(() => {
      fireEvent.press(backButton);
    });

    expect(handleGoBack).toHaveBeenCalled();
  });
});
