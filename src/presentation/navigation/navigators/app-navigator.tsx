import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '~/presentation/navigation/routes';

// Components
import { AppointmentsIcon, HomeIcon } from '~/presentation/components/icons';
import { ActivityIndicator, View } from 'react-native';

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
import { AuthContext } from '~/presentation/context';

export function AppNavigator() {
  const { isLoading, user } = useContext(AuthContext);
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  function renderAuthFlow() {
    if (user?.token) {
      return null;
    }
    return (
      <Stack.Screen
        name={routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    );
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

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.white} />
      </View>
    );
  }

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
