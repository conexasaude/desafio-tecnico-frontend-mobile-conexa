import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';

export const styleSheet = StyleSheet.create({
  HStack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    color: ${theme.COLORS.GRAY_300};
  `};
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Form = styled.View`
  width: 90%;
  padding: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 8px;
  background-color: ${({theme: theme}) => theme.COLORS.WHITE};
`;

export const FormTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 20px;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    color: ${theme.COLORS.GRAY_500};
  `};
`;

export const DateTimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.BLUE_600};
`;
