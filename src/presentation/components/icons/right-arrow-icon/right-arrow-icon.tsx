import React from 'react';
import { AntDesign } from '@expo/vector-icons';

// Styles
import { useTheme } from 'styled-components';

export function RightArrowIcon() {
  const theme = useTheme();
  return <AntDesign name="right" size={theme.metrics.tabIconSize} color={theme.colors.black} />;
}
