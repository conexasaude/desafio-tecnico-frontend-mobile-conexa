import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { ScheduleAppointmentScreen } from '@/screens/ScheduleAppointment';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { api } from '@/lib/axios';

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
const mockShowToast = jest.fn();

jest.mock('@/hooks/useReduxDispatch', () => ({
  useReduxDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useReduxSelector', () => ({
  useReduxSelector: () => ({ loading: false }),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

jest.mock('react-native-toast-notifications', () => ({
  useToast: () => ({ show: mockShowToast }),
}));

describe('ScheduleAppointment', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<ScheduleAppointmentScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<ScheduleAppointmentScreen />);
  });

  test('should dispatch create appointment and navigate back to appointments', () => {
    const { getByText, getByTestId } = renderWithThemeProvider(
      <ScheduleAppointmentScreen />,
    );

    const inpuPatient = getByTestId('input-patient');
    const datePickerDate = getByTestId('date-picker-date');
    const datePickerTime = getByTestId('date-picker-time');
    const inputObservation = getByTestId('input-observation');

    const submitButton = getByText('Agendar');

    fireEvent.changeText(inpuPatient, 'Maria Brown');

    fireEvent.press(datePickerDate);
    const confirmDateButton = getByText('confirm');
    fireEvent.press(confirmDateButton);

    fireEvent.press(datePickerTime);
    const confirmTimeButton = getByText('confirm');
    fireEvent.press(confirmTimeButton);

    fireEvent.changeText(inputObservation, 'something');

    fireEvent.press(submitButton);

    waitFor(() => expect(mockDispatch).toHaveBeenCalled());
    waitFor(() => expect(mockNavigate).toHaveBeenCalled());
  });

  test('should call toast if failead to create appointment', () => {
    const mockAxios = new MockAdapter(api);
    const mockError = 'Request failed with status code 500';

    mockAxios.onPost('/api/consulta').reply(500, { error: mockError });

    const { getByText, getByTestId } = renderWithThemeProvider(
      <ScheduleAppointmentScreen />,
    );

    const inpuPatient = getByTestId('input-patient');
    const datePickerDate = getByTestId('date-picker-date');
    const datePickerTime = getByTestId('date-picker-time');
    const inputObservation = getByTestId('input-observation');

    const submitButton = getByText('Agendar');

    fireEvent.changeText(inpuPatient, 'Maria Brown');

    fireEvent.press(datePickerDate);
    const confirmDateButton = getByText('confirm');
    fireEvent.press(confirmDateButton);

    fireEvent.press(datePickerTime);
    const confirmTimeButton = getByText('confirm');
    fireEvent.press(confirmTimeButton);

    fireEvent.changeText(inputObservation, 'something');

    fireEvent.press(submitButton);

    waitFor(() => expect(mockShowToast).toHaveBeenCalled());
  });

  test('should show an error message if you don not fill in the fields', () => {
    const { getByText } = renderWithThemeProvider(
      <ScheduleAppointmentScreen />,
    );

    const submitButton = getByText('Agendar');

    fireEvent.press(submitButton);

    waitFor(() => {
      expect(getByText('O campo nome do paciente é obrigatório')).toBeDefined();
      expect(getByText('O campo data é obrigatório')).toBeDefined();
      expect(getByText('O campo hora é obrigatório')).toBeDefined();
    });
  });
});
