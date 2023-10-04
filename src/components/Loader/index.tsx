import React from 'react';
import * as Styled from './styles';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';

export function Loader() {
  const { colors } = useTheme();

  return (
    <Styled.Container testID="loader">
      <ActivityIndicator size={'large'} color={colors.primary} />
      <Styled.Text>Carregando...</Styled.Text>
    </Styled.Container>
  );
}
