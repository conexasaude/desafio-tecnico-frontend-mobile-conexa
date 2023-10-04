import React from 'react';
import * as Styled from './styles';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';
import Logo from '../../../assets/svgs/logo-conexa-2.svg';

export function SyncScreen() {
  const { colors } = useTheme();

  return (
    <Styled.Container>
      <Logo width={200} height={80} />
      <ActivityIndicator size={'large'} color={colors.white} />
    </Styled.Container>
  );
}
