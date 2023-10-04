import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { DetailsAppointmentScreen } from '@/screens/DetailsAppointment';
import { AppointmentState } from '@/store/slices/appointment.slice';

const mockDispatch = jest.fn();

const appointment = {
  id: 16,
  medico: {
    id: 1,
    nome: 'Dr. Alex Green',
    email: null,
  },
  paciente: 'Maria Brow',
  dataConsulta: '2020-04-23 08:30',
  observacao: 'Exemplo de consulta',
};

jest.mock('@/hooks/useReduxDispatch', () => ({
  useReduxDispatch: () => mockDispatch,
}));

describe('DetailsAppointments', () => {
  const mockedAppointmentStore: AppointmentState = {
    appointments: [],
    appointment,
    error: undefined,
    loading: false,
  };

  test('should render correctly', () => {
    renderWithThemeProvider(<DetailsAppointmentScreen />, {
      appointment: mockedAppointmentStore,
    });
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<DetailsAppointmentScreen />, {
      appointment: mockedAppointmentStore,
    });
  });

  test('should render all informations about appointments', () => {
    const { getByText } = renderWithThemeProvider(
      <DetailsAppointmentScreen />,
      { appointment: mockedAppointmentStore },
    );

    expect(getByText('Maria Brow')).toBeDefined();
    expect(getByText('2020-04-23 08:30')).toBeDefined();
    expect(getByText('Exemplo de consulta')).toBeDefined();
  });

  test('should render Loader', () => {
    const mockedLoadingAppointmentStore: AppointmentState = {
      appointments: [],
      appointment: undefined,
      error: undefined,
      loading: true,
    };

    const { getByTestId } = renderWithThemeProvider(
      <DetailsAppointmentScreen />,
      { appointment: mockedLoadingAppointmentStore },
    );

    expect(getByTestId('loader')).toBeDefined();
  });

  test('should render ErrorBoundary', () => {
    const mockedErrorAppointmentStore: AppointmentState = {
      appointments: [],
      appointment: undefined,
      error: 'Something went wrong',
      loading: false,
    };

    const { getByTestId } = renderWithThemeProvider(
      <DetailsAppointmentScreen />,
      { appointment: mockedErrorAppointmentStore },
    );

    expect(getByTestId('error-boundary')).toBeDefined();
  });
});
