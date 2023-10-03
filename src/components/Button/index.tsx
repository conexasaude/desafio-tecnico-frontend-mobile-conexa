import React from 'react';
import * as Styled from './styles';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: 'outlined' | 'contained';
}

export function Button({
  title,
  loading,
  variant = 'contained',
  ...rest
}: ButtonProps) {
  return (
    <Styled.Wrapper variant={variant} activeOpacity={0.7} {...rest}>
      {!loading ? (
        <Styled.Title variant={variant}>{title}</Styled.Title>
      ) : (
        <ActivityIndicator
          testID="button-loading"
          color={'white'}
          size={'small'}
        />
      )}
    </Styled.Wrapper>
  );
}
