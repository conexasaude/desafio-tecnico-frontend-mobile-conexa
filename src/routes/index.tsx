import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from '@/routes/auth';
import { LoggedStack } from '@/routes/logged';
import { useReduxSelector } from '@/hooks/useReduxSelector';

export function Routes() {
  const { user } = useReduxSelector(state => state.user);

  return (
    <NavigationContainer>
      {!user ? <AuthStack /> : <LoggedStack />}
    </NavigationContainer>
  );
}
