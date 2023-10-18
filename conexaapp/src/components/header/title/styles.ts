import {Text} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled(Text).attrs({
  numberOfLines: 1,
})`
  font-weight: 700;
  text-align: center;
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BODY.M}px;
  `};
`;
