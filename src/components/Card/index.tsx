import React from 'react';
import * as Styled from './styles';
import { TouchableOpacityProps } from 'react-native';
import { ButtonProps } from '@/components/Button';

interface CardProps extends TouchableOpacityProps {
  title: string;
  description: string;
  button: ButtonProps;
}

export function Card({ title, description, button, ...rest }: CardProps) {
  return (
    <Styled.Wrapper
      testID="card"
      activeOpacity={0.8}
      onPress={button.onPress}
      {...rest}>
      <Styled.Row>
        <Styled.Column>
          <Styled.Title numberOfLines={1}>{title}</Styled.Title>
          <Styled.Description numberOfLines={2}>
            {description}
          </Styled.Description>
        </Styled.Column>

        <Styled.SeeMore
          testID="card-button"
          variant="outlined"
          activeOpacity={0.4}
          {...button}
        />
      </Styled.Row>
    </Styled.Wrapper>
  );
}
