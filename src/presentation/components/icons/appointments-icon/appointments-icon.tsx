import React from 'react';
import { Feather } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

export function AppointmentsIcon() {
  const theme = useTheme();
  return <Feather name="list" size={theme.metrics.tabIconSize} color={theme.colors.black} />;
}
