import styled, {css} from 'styled-components/native';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  variant: 'solid' | 'outline';
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  border-radius: 5px;
  align-items: center;
  padding: 10px;
  margin-top: 10px;

  ${({variant, theme}) =>
    variant === 'solid'
      ? css`
          background-color: ${theme.COLORS.BLUE_600};
        `
      : css`
          border: 1px solid ${theme.COLORS.BLUE_600};
        `}
`;

export const Title = styled(Text)<Props>`
  font-weight: bold;
  font-size: ${({theme}) => theme.FONT_SIZE.TITLE.S}px;

  ${({variant, theme}) =>
    variant === 'solid'
      ? css`
          color: ${theme.COLORS.WHITE};
        `
      : css`
          color: ${theme.COLORS.BLUE_600};
        `}
`;
