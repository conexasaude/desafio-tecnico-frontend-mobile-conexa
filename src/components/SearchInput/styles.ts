import styled from "@emotion/native";

export const Container = styled.View`
  padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md} 0;
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`; 

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-color: #C7C7CD;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
  padding: 0 ${props => props.theme.padding.xs} 0 ${props => props.theme.padding.sm};
  gap: 8px;
  background-color: ${props => props.theme.colors.white}
`;

export const CustomInput = styled.TextInput`
  height: 48px;
  font-size: ${props => props.theme.fontSizes.medium};
  border-radius: ${props => props.theme.borderRadius};
  flex: 1;
`;

export const IconContainer = styled.View`
`
