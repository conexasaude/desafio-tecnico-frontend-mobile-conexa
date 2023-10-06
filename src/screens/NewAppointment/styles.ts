import styled from '@emotion/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.primary};
  padding: 24px;
  gap: 24px
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

