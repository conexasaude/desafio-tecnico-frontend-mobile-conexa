import styled from '@emotion/native'

export const Container = styled.View`
  gap: 16px;
  padding: ${props => props.theme.padding.md};
`;

export const Content = styled.View`
  padding: ${props => props.theme.padding.md};
  background-color: ${props => props.theme.colors.white};
  gap: 8px;
  border-color: #C7C7CD;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const Header = styled.View`
  padding: ${props => props.theme.padding.md};
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  gap: 16px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const FieldText = styled.Text`
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.fontSizes.medium};
  text-transform: capitalize;
`;

export const Field = styled.View`
`;

export const FieldContainer = styled.View`
  justify-content: space-evenly;
  gap: 8px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.small};
`;