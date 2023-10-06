import styled from "@emotion/native";

export const Container = styled.Pressable`
  border-radius: ${props => props.theme.borderRadius};
  background-color: #1800AF;
  padding: ${props => props.theme.padding.md};
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`

export const Field = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${props => props.theme.colors.white};
`;

export const Pacient = styled.Text`
  border-radius: ${props => props.theme.fontSizes.medium}
  color: ${props => props.theme.colors.white};
`;

export const AppointmentDate = styled.Text`
  border-radius: ${props => props.theme.fontSizes.medium}
  color: ${props => props.theme.colors.white};
`;