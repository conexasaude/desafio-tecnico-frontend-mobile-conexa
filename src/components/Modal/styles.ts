import styled from '@emotion/native';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
`;

export const ModalView = styled.View`
  background-color:  ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.padding.xl};
  align-items: center;
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const ButtonContainer = styled.View`
  gap: 24px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.padding.md};
`;

export const ButtonNewAppointment = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
`;

export const ButtonBack = styled(Button)`
  background-color: rgba(0, 0, 0, 0.04);
`;

export const NewButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium}
`;

export const BackButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.medium}
`;

export const ModalTitle = styled.Text`
  margin-bottom: ${props => props.theme.margin.lg};
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.black}
  font-size: ${props => props.theme.fontSizes.large}
`;
