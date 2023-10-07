import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import AppointmentList from '../screens/AppointmentList';
import AppointmentDetails from '../screens/AppointmentDetails';
import NewAppointment from '../screens/NewAppointment';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="AppointmentList"
          component={AppointmentList}
          options={{ title: 'Lista de Consultas', headerBackTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetails}
          options={{ title: 'Detalhes da Consulta', headerBackTitle: 'Voltar' }}
        />
        <Stack.Screen
          name="NewAppointment"
          component={NewAppointment}
          options={{ title: 'Nova Consulta', headerBackTitle: 'Voltar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack