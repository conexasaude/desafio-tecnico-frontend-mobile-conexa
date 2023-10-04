import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@emotion/react';
import { TouchableOpacity } from 'react-native';
import { AppointmentsScreen } from '@/screens/Appointments';
import { ScheduleAppointmentScreen } from '@/screens/ScheduleAppointment';
import { DetailsAppointmentScreen } from '@/screens/DetailsAppointment';
import { ProfileScreen } from '@/screens/Profile';
import Logo from '../../assets/svgs/logo-conexa.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type LoggedStackParamsList = {
  Appointments: undefined;
  ScheduleAppointment: undefined;
  DetailsAppointment: { id: number };
  Profile: undefined;
};

const Logged = createNativeStackNavigator();

export function LoggedStack() {
  const { navigate } = useNavigation<NavPropsLogged>();
  const { colors } = useTheme();

  const renderLogoTitle = () => {
    return <Logo />;
  };

  const renderAccountButton = () => {
    return (
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Icon name="account-circle" size={28} color={colors.gray[400]} />
      </TouchableOpacity>
    );
  };

  return (
    <Logged.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        contentStyle: { backgroundColor: 'white' },
      }}>
      <Logged.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          headerTitle: renderLogoTitle,
          headerRight: renderAccountButton,
        }}
      />
      <Logged.Screen
        name="ScheduleAppointment"
        component={ScheduleAppointmentScreen}
        options={{
          headerTitle: 'Agendar Consulta',
          headerTintColor: colors.primary,
        }}
      />
      <Logged.Screen
        name="DetailsAppointment"
        component={DetailsAppointmentScreen}
        options={{
          headerTitle: 'Detalhes da Consulta',
          headerTintColor: colors.primary,
        }}
      />

      <Logged.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          presentation: 'modal',
          headerTitle: 'Perfil',
          headerTintColor: colors.primary,
        }}
      />
    </Logged.Navigator>
  );
}

export type NavPropsLogged = NativeStackNavigationProp<LoggedStackParamsList>;
