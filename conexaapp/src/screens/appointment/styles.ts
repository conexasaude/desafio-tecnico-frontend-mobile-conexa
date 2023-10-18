import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';

export const styleSheet = StyleSheet.create({
  HStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const Doctor = styled.View`
  flex: 1;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Card = styled.View`
  border-radius: 8px;
  margin: 0px 20px;
  padding: 10px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
  `}
`;

export const Field = styled.Text`
  margin-bottom: 5px;
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.BODY.S}px;
  `}
`;

export const FieldBold = styled.Text`
  font-weight: bold;
`;
export const Divider = styled.View`
  border-top-width: 1px;
  margin: 16px 0px;
  border-color: ${({theme}) => theme.COLORS.GRAY_300};
`;
