import React from 'react';
import { Entypo } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

export function HomeIcon() {
  const theme = useTheme();
  return <Entypo name="home" size={theme.metrics.tabIconSize} color={theme.colors.black} />;
}
