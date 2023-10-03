import React, { useState, useEffect, useCallback } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
    if (!isSignedIn) {
      <Stack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ title: 'Login' }}
      />;
    }
    return null;
  }

  function HomeScreen() {
    return (
      <Tab.Navigator
        initialRouteName={routes.CreateAppointmentScreen}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarInactiveTintColor: theme.colors.black,
        }}
      >
        <Tab.Screen
          name={routes.CreateAppointmentScreen}
          component={CreateAppointmentScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name={routes.AppointmentsScreen}
          component={AppointmentsScreen}
          options={{
            title: 'Consultas',
            tabBarIcon: ({ color }) => <AppointmentsIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }

  const screensTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.white,
    },
  };

  return (
    <NavigationContainer theme={screensTheme}>
      <Stack.Navigator>
        {renderAuthFlow()}

        <Stack.Screen
          name={routes.HomeScreen}
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={routes.AppointmentDetailsScreen}
          component={AppointmentDetailsScreen}
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
