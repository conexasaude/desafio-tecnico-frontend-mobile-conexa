import React from 'react';
import { Entypo } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

// Types
import { HomeIconInterface } from './types';

export function HomeIcon({ color }: HomeIconInterface) {
  const theme = useTheme();
  return <Entypo name="home" size={theme.metrics.tabIconSize} color={color} />;
}
