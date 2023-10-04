import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const ScreenContainer = styled(SafeAreaView)`
  ${({ theme }) => {
    return css`
      padding-top: ${theme.metrics.screenPaddingTop}px;
      padding-horizontal: ${theme.metrics.screenPaddingHorizontal}px;
      align-items: center;
      flex: 1;
    `;
  }};
`;

export const StyledImage = styled.Image`
  ${({ theme }) => {
    return css`
      width: 90px;
      height: 90px;
      border-radius: 100px;
      border-width: 0.2px;
      border-color: ${theme.colors.textColor};
      margin-bottom: ${theme.metrics.tripleSpace * 2}px;
    `;
  }};
`;

export const FieldContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-bottom: ${theme.metrics.tripleSpace}px;
      width: 100%;
      padding: ${theme.metrics.space}px;
      border-radius: ${theme.metrics.borderRadius}px;
      flex-direction: row;
      background-color: ${theme.colors.white};
      elevation: 3;
      shadow-color: ${theme.colors.black};
      shadow-radius: ${theme.metrics.borderRadius}px;
      shadow-opacity: ${theme.metrics.shadowOpacity};
    `;
  }};
`;
