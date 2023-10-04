import styled from '@emotion/native';

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const ButtonContainer = styled.View`
  gap: 8px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 10px;
`;

export const ButtonNewAppointment = styled(Button)`
  background-color: #5ac8fa;
`;

export const ButtonBack = styled(Button)`
  background-color: rgba(0, 0, 0, 0.04);
`;

export const NewButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const BackButtonText = styled.Text`
  color: #5ac8fa;
  font-weight: bold;
  text-align: center;
`;

export const ModalTitle = styled.Text`
  margin-bottom: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
