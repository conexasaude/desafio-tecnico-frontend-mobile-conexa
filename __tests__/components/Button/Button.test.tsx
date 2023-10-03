import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';
import { Button } from '@/components/Button';

describe('Button', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<Button title="title" />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<Button title="title" />);
  });

  test('should render title correctly', () => {
    const { getByText } = renderWithThemeProvider(<Button title="title" />);
    expect(getByText('title')).toBeDefined();
  });

  test('should render activity when loading is true', () => {
    const { getByTestId } = renderWithThemeProvider(
      <Button title="title" loading />,
    );

    expect(getByTestId('button-loading')).toBeDefined();
  });
});
