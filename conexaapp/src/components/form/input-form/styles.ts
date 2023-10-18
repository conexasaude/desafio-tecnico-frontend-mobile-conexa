import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 8px;
`;

export const ControllerContainer = styled.View`
  width: 100%;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 5px;
  ${Platform.OS !== 'ios' &&
  css`
    padding-top: 0px;
    padding-bottom: 0px;
  `}
`;

export const Error = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.XS}px;
  color: ${({theme}) => theme.COLORS.RED_500};
  margin: 8px;
`;

export const LabelContainer = styled.View`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  z-index: 1;
  padding: 0 5px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const RightElement = styled.View`
  z-index: 100;
  margin-left: 5px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
