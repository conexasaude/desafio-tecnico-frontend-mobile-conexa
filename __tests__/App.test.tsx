/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '@/App';
import { renderWithThemeProvider } from '@/lib/functions/Testing';

describe('App', () => {
  it('renders correctly', () => {
    renderWithThemeProvider(<App />);
  });
});
