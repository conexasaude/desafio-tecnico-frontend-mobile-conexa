import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';
import { Card } from '@/components/Card';
import { fireEvent } from '@testing-library/react-native';

describe('Card', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(
      <Card
        title="title"
        description="description"
        button={{ title: 'ver mais' }}
      />,
    );
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(
      <Card
        title="title"
        description="description"
        button={{ title: 'ver mais' }}
      />,
    );
  });

  test('should render title description and button', () => {
    const { getByText, getByTestId } = renderWithThemeProvider(
      <Card
        title="title"
        description="description"
        button={{ title: 'ver mais' }}
      />,
    );

    expect(getByText('title')).toBeDefined();
    expect(getByText('description')).toBeDefined();
    expect(getByTestId('card-button')).toBeDefined();
  });

  test('should called onPress button when press card', () => {
    const press = jest.fn();

    const { getByTestId } = renderWithThemeProvider(
      <Card
        title="title"
        description="description"
        button={{ title: 'ver mais', onPress: press }}
      />,
    );

    fireEvent.press(getByTestId('card'));
    expect(press).toHaveBeenCalledTimes(1);

    fireEvent.press(getByTestId('card-button'));
    expect(press).toHaveBeenCalledTimes(2);
  });
});
