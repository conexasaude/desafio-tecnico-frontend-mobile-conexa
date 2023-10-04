import React from 'react';
import {
  matchSnapshotWithProvider,
  renderWithThemeProvider,
} from '@/lib/functions/Testing';

import { Loader } from '@/components/Loader';

describe('Loader', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<Loader />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<Loader />);
  });
});
