import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const PatientContainer = styled.View`
  gap: 5px;
`;

export const DateHour = styled.Text`
  align-self: flex-end;
  font-weight: 500;
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.XS}px;
`;

export const Patient = styled.Text`
  font-weight: 500;
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.M}px;
`;

export const Description = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
`;

export const DoctorContainer = styled.View`
  border-top-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_300};
  margin-top: 5px;
  padding-top: 5px;
`;

export const DoctorName = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
`;

export const DoctorEmail = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.BODY.S}px;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;
