import styled from "@emotion/native";

export const Container = styled.Pressable`
  border-radius: 8px;
  background-color: #1800AF;
  padding: 8px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #FFF;
`

export const Field = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: #FFF;
`;

export const Pacient = styled.Text`
  font-size: 16px;
  color: #FFF;
`;

export const AppointmentDate = styled.Text`
  font-size: 16px;
  color: #FFF;
`;