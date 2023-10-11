import '@emotion/react'

import { theme } from '@theme'

declare module '@emotion/react' {
  type ThemeType = typeof theme
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
