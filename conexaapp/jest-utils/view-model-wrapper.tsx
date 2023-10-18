import React, {ReactNode} from 'react';

import {AppContextProvider} from '@contexts/app.context';
import {AuthContextProvider} from '@contexts/auth.context';

export const ViewModelProvidersWrapper = ({
  children,
}: {
  children: ReactNode;
}) => (
  <AppContextProvider>
    <AuthContextProvider>{children}</AuthContextProvider>
  </AppContextProvider>
);
