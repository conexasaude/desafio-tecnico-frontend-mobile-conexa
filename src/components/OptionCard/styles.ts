import styled from "@emotion/native"

export const Container = styled.View`
  flex-direction: row;
  background-color: #1800AF;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: ${props => props.theme.borderRadius};
`

export const CardText = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
`

