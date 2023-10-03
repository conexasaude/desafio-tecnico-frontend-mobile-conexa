import React from 'react';
import {
  renderWithThemeProvider,
  matchSnapshotWithProvider,
} from '@/lib/functions/Testing';

import { Input } from '@/components/Input';
import { fireEvent } from '@testing-library/react-native';

describe('Input', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<Input label="label" />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<Input label="label" />);
  });

  test('should render label correctly', () => {
    const { getByText } = renderWithThemeProvider(<Input label="label" />);
    expect(getByText('label')).toBeDefined();
  });

  test('should render icon visibility when secureTextEntry is true', () => {
    const { getByTestId } = renderWithThemeProvider(
      <Input label="label" secureTextEntry />,
    );

    expect(getByTestId('visibility-icon')).toBeDefined();
  });

  test('should render icon visibility-off when press button visibilty and return to visibiliy when press again', () => {
    const { getByTestId } = renderWithThemeProvider(
      <Input label="label" secureTextEntry />,
    );

    const input = getByTestId('input-text');
    const visibilityIcon = getByTestId('visibility-icon');

    expect(visibilityIcon).toBeTruthy();
    expect(input.props.secureTextEntry).toBeTruthy();

    fireEvent.press(visibilityIcon);

    const visibilityOffIcon = getByTestId('visibility-off-icon');
    expect(visibilityOffIcon).toBeTruthy();
    expect(input.props.secureTextEntry).toBeFalsy();

    fireEvent.press(visibilityOffIcon);

    expect(visibilityIcon).toBeTruthy();
    expect(input.props.secureTextEntry).toBeTruthy();
  });

  test('should render error text', () => {
    const { getByText } = renderWithThemeProvider(
      <Input label="label" error="something went wrong" />,
    );
    expect(getByText('something went wrong')).toBeDefined();
  });

  test('should render a component textarea', () => {
    const { getByTestId } = renderWithThemeProvider(
      <Input label="label" textArea />,
    );

    const containerInput = getByTestId('input-container');
    const input = getByTestId('input-text');

    expect(containerInput.props.style[0].height).toEqual(180);
    expect(input.props.multiline).toBeTruthy();
    expect(input.props.numberOfLines).toEqual(6);
    expect(input.props.textAlignVertical).toEqual('top');
  });
});
