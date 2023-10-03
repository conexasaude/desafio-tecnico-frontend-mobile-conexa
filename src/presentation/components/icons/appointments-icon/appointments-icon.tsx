import React from 'react';
import { Feather } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

// Types
import { AppointmentsIconInterface } from './types';

export function AppointmentsIcon({ color }: AppointmentsIconInterface) {
  const theme = useTheme();
  return <Feather name="list" size={theme.metrics.tabIconSize} color={color} />;
}
