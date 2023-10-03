import '@emotion/react';

import { COLOR_TYPE } from '@/styles/colors';
import { EFFECTS_TYPE } from '@/styles/effects';
import { FONT_TYPE } from '@/styles/fonts';

declare module '@emotion/react' {
  export interface Theme {
    colors: COLOR_TYPE;
    effects: EFFECTS_TYPE;
    fonts: FONT_TYPE;
  }
}
