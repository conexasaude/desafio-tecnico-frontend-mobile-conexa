import {css} from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.BODY.S}px;
  `}
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;
