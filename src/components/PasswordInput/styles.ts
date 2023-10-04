import styled from "@emotion/native";

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  padding: 0 4px 0 8px;
  gap: 8px;
`;

export const CustomInput = styled.TextInput`
  height: 48px;
  font-size: 16px;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 14px;
  position: absolute;
  font-weight: 500;
  background-color: #FFF;
  top: -8px;
  left: 8px;
  padding: 0 4px;
  z-index: 1;
`;

export const IconButton = styled.Pressable`
  padding: 4px;
`
