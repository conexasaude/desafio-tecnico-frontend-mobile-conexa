import styled from '@emotion/native'

export const Container = styled.View`
  gap: 16px;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: row;
  gap: 16px;
  border-width: 1px 0;
  border-color: #C7C7CD;
`;

export const HeaderText = styled.Text`
  border-radius: ${props => props.theme.fontSizes.medium}
  text-transform: capitalize;
`;

export const Field = styled.View`
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  gap: 8px;
  border-width: 1px 0;
  border-color: #C7C7CD;
`;

export const TextContainer = styled.View`
  justify-content: space-around
`;

export const Label = styled.Text`
  font-size: 14px;
`;

export const Observation = styled.Text`
  border-radius: ${props => props.theme.fontSizes.medium}
`;