import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { LoginScreen } from '@/screens/Login';
import { fireEvent, waitFor } from '@testing-library/react-native';

const mockDispatch = jest.fn();

jest.mock('@/hooks/useReduxDispatch', () => ({
  useReduxDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useReduxSelector', () => ({
  useReduxSelector: () => ({ loading: false }),
}));

describe('Login', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<LoginScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<LoginScreen />);
  });

  test('should called dispatch', () => {
    const { getByText, getByTestId } = renderWithThemeProvider(<LoginScreen />);

    const inputEmail = getByTestId('input-email');
    const inputPassword = getByTestId('input-password');
    const submitButton = getByText('Entrar');

    fireEvent.changeText(inputEmail, 'maria@gmail.com');
    fireEvent.changeText(inputPassword, '12345678');
    fireEvent.press(submitButton);

    waitFor(() => expect(mockDispatch).toHaveBeenCalled());
  });

  test('should show an error message if you don not fill in the fields', () => {
    const { getByText } = renderWithThemeProvider(<LoginScreen />);

    const submitButton = getByText('Entrar');

    fireEvent.press(submitButton);

    waitFor(() => {
      expect(getByText('O campo de e-mail é obrigatório')).toBeDefined();
      expect(getByText('O campo de senha é obrigatório')).toBeDefined();
    });
  });

  test('should show an error message if you fill in the email field with an invalid email', () => {
    const { getByText, getByTestId } = renderWithThemeProvider(<LoginScreen />);

    const inputEmail = getByTestId('input-email');
    const inputPassword = getByTestId('input-password');
    const submitButton = getByText('Entrar');

    fireEvent.changeText(inputEmail, 'invalid');
    fireEvent.changeText(inputPassword, '12345678');
    fireEvent.press(submitButton);

    waitFor(() => {
      expect(getByText('Por favor, insira um e-mail válido')).toBeDefined();
    });
  });
});
