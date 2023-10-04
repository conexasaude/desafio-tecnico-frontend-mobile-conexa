import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { DatePicker } from '@/components/DatePicker';
import { fireEvent } from '@testing-library/react-native';

describe('DatePicker', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<DatePicker label="label" />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<DatePicker label="label" />);
  });

  test('should open the date picker modal on press', async () => {
    const { getByTestId, queryByTestId } = renderWithThemeProvider(
      <DatePicker label="label" />,
    );
    const datePicker = getByTestId('date-picker');
    const modal = queryByTestId('date-picker-modal');

    expect(modal).toBeNull();

    fireEvent.press(datePicker);

    const modalAfterPress = getByTestId('date-picker-modal');
    expect(modalAfterPress).toBeTruthy();
  });

  test('should be called onChange when confirm a date', () => {
    const mockOnChange = jest.fn();

    const { getByTestId, getByText } = renderWithThemeProvider(
      <DatePicker onChange={mockOnChange} label="label" />,
    );

    const datePicker = getByTestId('date-picker');
    fireEvent.press(datePicker);

    const confirmButton = getByText('confirm');
    fireEvent.press(confirmButton);

    expect(mockOnChange).toBeCalled();
  });

  test('should render placeholder', () => {
    const { getByText } = renderWithThemeProvider(
      <DatePicker placeholder="placeholder" label="label" />,
    );

    expect(getByText('placeholder')).toBeDefined();
  });

  test('should format label correclty with mode time', () => {
    let date = '';

    const { getByTestId, getByText } = renderWithThemeProvider(
      <DatePicker
        mode="time"
        onChange={newDate => (date = newDate)}
        label="label"
      />,
    );

    const datePicker = getByTestId('date-picker');
    fireEvent.press(datePicker);

    const confirmButton = getByText('confirm');
    fireEvent.press(confirmButton);

    expect(getByText(date)).toBeDefined();
  });

  test('should format label correclty with mode datetime', () => {
    let date = '';

    const { getByTestId, getByText } = renderWithThemeProvider(
      <DatePicker
        mode="datetime"
        onChange={newDate => (date = newDate)}
        label="label"
      />,
    );

    const datePicker = getByTestId('date-picker');
    fireEvent.press(datePicker);

    const confirmButton = getByText('confirm');
    fireEvent.press(confirmButton);

    expect(getByText(date)).toBeDefined();
  });

  test('should not update label if press cancel', () => {
    const { getByTestId, getByText } = renderWithThemeProvider(
      <DatePicker label="label" />,
    );

    expect(getByText('Selecione...')).toBeDefined();

    const datePicker = getByTestId('date-picker');
    fireEvent.press(datePicker);

    const cancelButton = getByText('cancel');
    fireEvent.press(cancelButton);

    expect(getByText('Selecione...')).toBeDefined();
  });

  test('should render error text', () => {
    const { getByText } = renderWithThemeProvider(
      <DatePicker error="something went wrong" label="label" />,
    );

    expect(getByText('something went wrong')).toBeDefined();
  });
});
