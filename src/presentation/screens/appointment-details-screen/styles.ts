import styled, { css } from 'styled-components/native';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ScreenContainer = styled(SafeAreaView)`
  ${({ theme }) => {
    return css`
      align-items: center;
      padding-horizontal: ${theme.metrics.screenPaddingHorizontal}px;
    `;
  }};
`;

export const StyledImage = styled.Image`
  ${({ theme }) => {
    return css`
      width: 80px;
      height: 80px;
      margin-right: ${theme.metrics.tripleSpace}px;
    `;
  }};
`;

export const AppointmentDetailsCardContainer = styled.View`
  ${({ theme }) => {
    return css`
      padding-horizontal: ${theme.metrics.tripleSpace}px;
      padding-vertical: ${theme.metrics.tripleSpace * 2}px;
      border-radius: ${theme.metrics.borderRadius}px;
      justify-content: center;
      background-color: ${theme.colors.white};
    `;
  }};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  justify-content: center;
`;
