import styled, {css} from 'styled-components/native';
import LogoSvg from '@assets/logo-conexa.svg';

export const Logo = styled(LogoSvg).attrs({
  width: 200,
  height: 100,
})`
  align-self: center;
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
  `}
`;

export const PasswordButton = styled.TouchableOpacity``;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.BLUE_600};
`;
