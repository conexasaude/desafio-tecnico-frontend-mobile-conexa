import React from 'react';
import {
  matchSnapshotWithProvider,
  renderWithThemeProvider,
} from '@/lib/functions/Testing';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { fireEvent } from '@testing-library/react-native';

describe('ErrorBoundary', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<ErrorBoundary tryAgain={jest.fn()} />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<ErrorBoundary tryAgain={jest.fn()} />);
  });

  test('should call try again', () => {
    const mockTryAgain = jest.fn();

    const { getByText } = renderWithThemeProvider(
      <ErrorBoundary tryAgain={mockTryAgain} />,
    );

    const tryAgainButton = getByText('Tentar Novamente');

    fireEvent.press(tryAgainButton);

    expect(mockTryAgain).toHaveBeenCalled();
  });
});
