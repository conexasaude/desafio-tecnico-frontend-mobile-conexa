import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '~/presentation/navigation/routes';

// Screens
import { LoginScreen } from '~/presentation/screens';

// Types
import { RootStackParamList } from './types';

export function AuthNavigator() {
  const Auth = createNativeStackNavigator<RootStackParamList>();

  return (
    <Auth.Navigator>
      <Auth.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
}
