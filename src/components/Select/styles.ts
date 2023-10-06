import styled from "@emotion/native";

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  font-weight: 500;
  background-color: ${props => props.theme.colors.white};
  top: -8px;
  left: 8px;
  padding: 0 ${props => props.theme.padding.xs};
  z-index: 10000;
`;