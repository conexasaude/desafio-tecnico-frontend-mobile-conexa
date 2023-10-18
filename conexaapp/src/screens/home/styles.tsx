import styled from 'styled-components/native';
import LogOutSVG from '@assets/ios-log-out.svg';
import {css} from 'styled-components';

export const LogOutIcon = styled(LogOutSVG).attrs({
  fill: '#FFFFFF',
  width: 25,
  height: 25,
})``;

export const SignOutButtonTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.TITLE.XS}px;
  `}
`;

export const CreateButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 28px;
  align-self: center;
  position: absolute;
  bottom: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;
