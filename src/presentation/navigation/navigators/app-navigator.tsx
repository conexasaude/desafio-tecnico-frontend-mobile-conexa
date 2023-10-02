import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '~/presentation/navigation/routes';

// Adapters
import { getCurrentAccountAdapter } from '~/main/adapters';

// Components
import { AppointmentsIcon, HomeIcon } from '~/presentation/components/icons';

// Screens
import {
  AppointmentDetailsScreen,
  AppointmentsScreen,
  CreateAppointmentScreen,
  LoginScreen,
} from '~/presentation/screens';

// Styles
import { useTheme } from 'styled-components';

// Types
import { RootStackParamList } from './types';

export function AppNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  const checkAccessToken = useCallback(async () => {
    const account: string = await getCurrentAccountAdapter();
    const parseAccount = JSON.parse(account);

    if (parseAccount?.token) {
      setIsSignedIn(true);
    }

    return;
  }, []);

  useEffect(() => {
    void checkAccessToken();
  }, [checkAccessToken]);

  function renderAuthFlow() {
    if (isSignedIn) {
      return null;
    }

    return (
      <Stack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
    );
  }

  function HomeScreen() {
    return (
      <Tab.Navigator
        initialRouteName={routes.CreateAppointmentScreen}
        screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.colors.secondary }}
      >
        <Tab.Screen
          name={routes.CreateAppointmentScreen}
          component={CreateAppointmentScreen}
          options={{
            title: 'Home',
            tabBarIcon: () => <HomeIcon />,
          }}
        />
        <Tab.Screen
          name={routes.AppointmentsScreen}
          component={AppointmentsScreen}
          options={{
            title: 'Consultas',
            tabBarIcon: () => <AppointmentsIcon />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {renderAuthFlow()}

        <Stack.Screen name={routes.HomeScreen} component={HomeScreen} />

        <Stack.Screen name={routes.AppointmentDetailsScreen} component={AppointmentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
