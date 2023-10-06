import styled from "@emotion/native"

export const Container = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.xl};
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`

export const CardText = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.white};
  font-weight: 600;
`

