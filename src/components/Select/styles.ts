import styled from "@emotion/native";

export const Label = styled.Text`
  font-size: 14px;
  position: absolute;
  font-weight: 500;
  background-color: ${props => props.theme.colors.primary};
  top: -8px;
  left: 8px;
  padding: 0 4px;
  z-index: 10000;
`;