import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { DetailsAppointmentScreen } from '@/screens/DetailsAppointment';

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

jest.mock('@/hooks/useReduxSelector', () => ({
  useReduxSelector: () => ({ appointment }),
}));

describe('DetailsAppointments', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<DetailsAppointmentScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<DetailsAppointmentScreen />);
  });

  test('should render all informations about appointments', () => {
    const { getByText } = renderWithThemeProvider(<DetailsAppointmentScreen />);
    expect(getByText('Maria Brow')).toBeDefined();
    expect(getByText('2020-04-23 08:30')).toBeDefined();
    expect(getByText('Exemplo de consulta')).toBeDefined();
  });
});
