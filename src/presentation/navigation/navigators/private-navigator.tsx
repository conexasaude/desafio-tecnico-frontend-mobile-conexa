import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '~/presentation/navigation/routes';

// Components
import { AppointmentsIcon, HomeIcon } from '~/presentation/components/icons';

// Screens
import {
  AccountScreen,
  AppointmentDetailsScreen,
  AppointmentsScreen,
  CreateAppointmentScreen,
} from '~/presentation/screens';

// Styles
import { useTheme } from 'styled-components';

// Types
import { RootStackParamList } from './types';

export function PrivateNavigator() {
  const Private = createNativeStackNavigator<RootStackParamList>();
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

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

        <Tab.Screen
          name={routes.AccountScreen}
          component={AccountScreen}
          options={{
            title: 'Conta',
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Private.Navigator>
      <Private.Screen
        name={routes.HomeScreen}
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Private.Screen
        name={routes.AppointmentDetailsScreen}
        component={AppointmentDetailsScreen}
        options={{ title: 'Detalhes' }}
      />
    </Private.Navigator>
  );
}
