import React from 'react';
import {
  matchSnapshotWithProvider,
  renderWithThemeProvider,
} from '@/lib/functions/Testing';
import { SyncScreen } from '@/screens/Sync';

describe('ScheduleAppointment', () => {
  test('should render correctly', () => {
    renderWithThemeProvider(<SyncScreen />);
  });

  test('should matches snapshot', () => {
    matchSnapshotWithProvider(<SyncScreen />);
  });
});
