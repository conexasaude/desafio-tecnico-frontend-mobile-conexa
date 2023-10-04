import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

// Types
import { AccountIconInterface } from './types';

export function AccountIcon({ color }: AccountIconInterface) {
  const theme = useTheme();
  return <MaterialCommunityIcons name="account" size={theme.metrics.tabIconSize} color={color} />;
}
