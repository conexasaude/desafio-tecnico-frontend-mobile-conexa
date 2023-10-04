import styled, { css } from 'styled-components/native';

// Components
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from '~/presentation/components/heading';

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

export const Header = styled.View`
  flex: 0.4;
  width: 100%;
  align-items: center;
`;

export const Title = styled(Heading)`
  font-size: 22px;
`;

export const SubtitleContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.metrics.tripleSpace}px;
    `;
  }};
`;
