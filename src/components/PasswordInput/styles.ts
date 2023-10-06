import styled from "@emotion/native";

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
  padding: 0 ${props => props.theme.fontSizes.small} 0 ${props => props.theme.fontSizes.medium};
  gap: 8px;
`;

export const CustomInput = styled.TextInput`
  height: 48px;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  font-weight: 500;
  background-color: ${props => props.theme.colors.white};
  top: -8px;
  left: 8px;
  padding: 0 ${props => props.theme.padding.xs};
  z-index: 1;
`;

export const IconButton = styled.Pressable`
  padding: ${props => props.theme.padding.xs};
`
