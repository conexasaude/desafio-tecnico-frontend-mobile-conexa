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
  border-radius: ${props => props.theme.fontSizes.medium}
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const Username = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const OptionsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: 0 ${props => props.theme.padding.lg};
`

export const OptionText = styled.Text`
  border-radius: ${props => props.theme.fontSizes.medium}
  text-align: center;
  font-weight: 500;
`

export const CardList = styled.View`
  justify-content: center;
  gap: 48px
`;

export const LogoutButtonContainer = styled.View`
  padding: 0 48px;
`;

export const LogoutButton = styled.Pressable`
  padding: 16px;
  background-color: #ebebeb;
  border-radius: ${props => props.theme.borderRadius};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #5ac8fa;
  font-weight: bold;
`


