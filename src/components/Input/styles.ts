import styled from "@emotion/native";

export const CustomInput = styled.TextInput`
  height: ${props => (props.multiline ? '96px' : '46px')};
  border-width: 1px;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
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