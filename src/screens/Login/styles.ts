import styled from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  padding: 24px;
`;

export const SVGContainer = styled.View`
  justify-content: center;
`;

export const Form = styled.View`
  margin-top: 32px;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #0a0a31;
  margin-bottom: 24px;
`;