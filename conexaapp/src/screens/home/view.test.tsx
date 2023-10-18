import {act, fireEvent, render} from '@testing-library/react-native';
import {Home} from './view';
import {HomeViewModel, useHomeViewModel} from './view-model';
import {ViewProviderWrapper} from '../../../jest-utils/wrapper';
import {UserModel} from '@models/user.model';
import {IAppointment} from '@interfaces/appointment.interface';
import AddCircleSVG from '@assets/add-circle.svg';

jest.mock('./view-model');
jest.mock('@assets/ios-log-out.svg', () => 'LogOutSVG');
jest.mock('@assets/add-circle.svg', () => 'AddCircleSVG');
jest.mock('@assets/logo-conexa-white.svg', () => 'LogoSvg');

interface CreateMockHomeView {
  user: UserModel;
  appointments: IAppointment[];
  refresh: boolean;
}

const createMockHomeViewModel = ({
  user,
  appointments,
  refresh,
}: CreateMockHomeView): HomeViewModel => ({
  user,
  appointments,
  refresh,
  getAppointments: jest.fn(),
  handleSignOut: jest.fn(),
  handleCreateAppointment: jest.fn(),
});

interface FactoryProps {
  user?: UserModel;
  appointments?: IAppointment[];
  refresh?: boolean;
}

const defaultMockedUser = {
  nome: 'John Doe',
  email: 'john.doe@gmail.com',
  signOut: jest.fn(),
} as unknown;

function makeSut({
  user = defaultMockedUser as UserModel,
  appointments = [] as IAppointment[],
  refresh = false,
}: FactoryProps) {
  const mockHomeViewModel = createMockHomeViewModel({
    user,
    appointments,
    refresh,
  });

  (useHomeViewModel as jest.Mock).mockReturnValueOnce(mockHomeViewModel);

  const sut = render(
    <ViewProviderWrapper>
      <Home />
    </ViewProviderWrapper>,
  );

  return {...sut, ...mockHomeViewModel};
}

describe('Home view', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    const {toJSON} = makeSut({});

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render correctly with user name', async () => {
    const {toJSON, findByText} = makeSut({});
    const mockedUser = defaultMockedUser as UserModel;
    const grettings = `Olá ${mockedUser.nome}`;

    const grettingsText = await findByText(grettings);

    expect(grettingsText.props.children[1]).toEqual(mockedUser.nome);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render appointments correctly', () => {
    const mockedAppointments: IAppointment[] = [
      {
        id: 16,
        medico: {
          id: 1,
          nome: 'Dr. Daniel Vieira',
          email: null,
        },
        paciente: 'Diego Senna',
        dataConsulta: '2020-04-23 08:30',
        observacao: 'Exemplo de consulta',
      },
      {
        id: 11,
        medico: {
          id: 1,
          nome: 'Dr. Daniel Vieira',
          email: null,
        },
        paciente: 'Rafael Braga',
        dataConsulta: '2020-04-23 08:30',
        observacao: 'Exemplo de consulta',
      },
    ];

    const {queryByText} = makeSut({
      appointments: mockedAppointments,
    });

    mockedAppointments.forEach(appointment => {
      expect(queryByText(`Paciente: ${appointment.paciente}`)).toBeTruthy();
    });
  });

  it('should call handleSignOut when "Sair" button is pressed', async () => {
    const {findByText, handleSignOut} = makeSut({});

    const signOutButton = await findByText('Sair');

    await act(() => {
      fireEvent.press(signOutButton);
    });

    expect(handleSignOut).toHaveBeenCalledTimes(1);
  });

  it('should call handleCreateAppointment when Plus button is pressed', async () => {
    const {UNSAFE_getByType, handleCreateAppointment} = makeSut({});

    await act(() => {
      fireEvent.press(UNSAFE_getByType(AddCircleSVG));
    });

    expect(handleCreateAppointment).toHaveBeenCalled();
  });
});
