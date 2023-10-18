import React, {ReactNode} from 'react';

import {ThemeProvider} from 'styled-components/native';
import theme from '../src/theme';

export const ViewProviderWrapper = ({children}: {children: ReactNode}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
