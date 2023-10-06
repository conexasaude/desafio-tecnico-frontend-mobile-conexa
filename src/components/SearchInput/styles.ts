import styled from "@emotion/native";

export const Container = styled.View`
  padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md} 0;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
  padding: 0 4px 0 8px;
  gap: 8px;
`;

export const CustomInput = styled.TextInput`
  height: 48px;
  border-radius: ${props => props.theme.fontSizes.medium}
  flex: 1;
`;

export const IconContainer = styled.View`
  padding: 4px;
`
