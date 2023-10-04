import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Navigators
import { AuthNavigator } from './auth-navigator';
import { PrivateNavigator } from './private-navigator';

// Components
import { ActivityIndicator, View } from 'react-native';

// Styles
import { useTheme } from 'styled-components';

// Types
import { AuthContext } from '~/presentation/context';

export function AppNavigator() {
  const { isLoading, user } = useContext(AuthContext);
  const theme = useTheme();

  const screensTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.white,
    },
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.white} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={screensTheme}>
      {!user ? <AuthNavigator /> : <PrivateNavigator />}
    </NavigationContainer>
  );
}
