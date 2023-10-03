import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { LoginScreen } from '@/screens/Login';

export type AuthStackParamsList = {
  Login: undefined;
};

const Auth = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}>
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
}

export type NavPropsAuth = NativeStackNavigationProp<AuthStackParamsList>;
