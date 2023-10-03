import '@emotion/react';

import { COLOR_TYPE } from '@/theme/colors';
import { EFFECTS_TYPE } from '@/theme/effects';
import { FONT_TYPE } from '@/theme/fonts';

declare module '@emotion/react' {
  export interface Theme {
    colors: COLOR_TYPE;
    effects: EFFECTS_TYPE;
    fonts: FONT_TYPE;
  }
}
