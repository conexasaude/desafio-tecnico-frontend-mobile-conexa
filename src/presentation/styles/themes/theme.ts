import { ColorsInterface, colors } from '~/presentation/styles/colors';
import { MetricsInterface, metrics } from '~/presentation/styles/metrics';

import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsInterface;
    metrics: MetricsInterface;
  }
}

export const theme: DefaultTheme = {
  colors,
  metrics,
};
