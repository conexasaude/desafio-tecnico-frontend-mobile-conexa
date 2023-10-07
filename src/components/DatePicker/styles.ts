import styled from "@emotion/native";

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  font-weight: 500;
  background-color: ${props => props.theme.colors.white};
  top: -10px;
  left: 8px;
  padding: 0 ${props => props.theme.padding.xs};
  z-index: 1;
`;

export const ValueContainer = styled.View`
  height: 46px;
  border-width: 1px;
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.sm};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: ${props => props.theme.margin.lg};
  justify-content: center;
`;

export const Value = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Placeholder = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  color: #C7C7CD;
`;