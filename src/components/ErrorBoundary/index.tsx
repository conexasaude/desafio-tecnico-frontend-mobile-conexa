import React from 'react';
import { useTheme } from '@emotion/react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Styled from './styles';

interface ErrorBoundaryProps {
  tryAgain: () => void;
}

export function ErrorBoundary({ tryAgain }: ErrorBoundaryProps) {
  const { colors } = useTheme();

  return (
    <Styled.Container testID="error-boundary">
      <Icon
        name="alert-circle-outline"
        color={colors.status.warning}
        size={64}
      />
      <Styled.Text>
        {'Desculpe, ocorreu um problema. Por favor, tente novamente.'}
      </Styled.Text>

      <Styled.ButtonTryAgain onPress={tryAgain} title="Tentar Novamente" />
    </Styled.Container>
  );
}
