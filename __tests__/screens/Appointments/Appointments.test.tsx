import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { AppointmentsScreen } from '@/screens/Appointments';
import { fireEvent } from '@testing-library/react-native';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

const appointments = [
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

jest.mock('@/hooks/useReduxDispatch', () => ({
  useReduxDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useReduxSelector', () => ({
  useReduxSelector: () => ({
    loading: false,
    error: undefined,
    appointments,
  }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
  useIsFocused: () => false,
}));

describe('Appointments', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<AppointmentsScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<AppointmentsScreen />);
  });

  test('should render all cards', () => {
    const { getAllByTestId } = renderWithThemeProvider(<AppointmentsScreen />);
    const appointmentsCard = getAllByTestId('appointment-card');
    expect(appointmentsCard.length).toEqual(2);
  });

  test('should call navigate to schedule appointment', () => {
    const { getByText } = renderWithThemeProvider(<AppointmentsScreen />);
    const scheduleAppointmentButton = getByText('Agendar Consulta');
    fireEvent.press(scheduleAppointmentButton);
    expect(mockNavigate).toHaveBeenCalledWith('ScheduleAppointment');
  });

  test('should call navigate to details appointment', () => {
    const { getAllByTestId } = renderWithThemeProvider(<AppointmentsScreen />);
    const appointmentsCard = getAllByTestId('appointment-card');

    appointmentsCard.forEach((card, index) => {
      fireEvent.press(card);
      expect(mockNavigate).toHaveBeenCalledWith('DetailsAppointment', {
        id: appointments[index].id,
      });
    });
  });
});
