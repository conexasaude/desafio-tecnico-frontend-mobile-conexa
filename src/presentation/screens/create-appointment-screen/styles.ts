import styled, { css } from 'styled-components/native';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';

export const SnackBarContainer = styled.View`
  align-items: center;
  flex: 1;
`;

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
