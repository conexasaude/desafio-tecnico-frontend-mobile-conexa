import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { ProfileScreen } from '@/screens/Profile';
import { fireEvent } from '@testing-library/react-native';
import { User } from '@/models/user';

const mockDispatch = jest.fn();
const mockedUser: User = {
  nome: 'Maria Brown',
  email: 'maria@gmail.com',
  token: '1',
};

jest.mock('@/hooks/useReduxDispatch', () => ({
  useReduxDispatch: () => mockDispatch,
}));

jest.mock('@/hooks/useReduxSelector', () => ({
  useReduxSelector: () => ({ loading: false, user: mockedUser }),
}));

describe('ProfileScreen', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<ProfileScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<ProfileScreen />);
  });

  test('should call logout if press "sair"', async () => {
    const { getByText } = renderWithThemeProvider(<ProfileScreen />);
    const logoutButton = getByText('Sair');
    fireEvent.press(logoutButton);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
