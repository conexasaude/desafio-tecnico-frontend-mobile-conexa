import styled from "@emotion/native";

export const Container = styled.Pressable`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.padding.sm};
  margin-top: ${props => props.theme.margin.md};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const Content = styled.View`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.padding.sm};
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.margin.sm};
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`

export const Field = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  color: ${props => props.theme.colors.black};
`;

export const Pacient = styled.Text`
  border-radius: ${props => props.theme.borderRadius}}
  color: ${props => props.theme.colors.black};
`;

export const AppointmentDate = styled.Text`
  border-radius: ${props => props.theme.borderRadius}}
  color: ${props => props.theme.colors.black};
`;