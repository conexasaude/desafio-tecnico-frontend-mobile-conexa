import styled from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.View`
  height: 25%;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.padding.xl} ${props => props.theme.padding.lg};
  gap: 8px;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;

`

export const Greeting = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const Username = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const OptionsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: 0 ${props => props.theme.padding.lg};
`

export const OptionText = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  text-align: center;
`

export const CardList = styled.View`
  justify-content: center;
  gap: 48px
`;

export const LogoutButtonContainer = styled.View`
  padding: 0 ${props => props.theme.padding.xl};
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.md};
  background-color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`


