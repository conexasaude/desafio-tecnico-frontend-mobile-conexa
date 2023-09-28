import React from 'react';
import { registerRootComponent } from 'expo';
import { AppNavigator } from '~/presentation/navigation';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';

registerRootComponent(Main);

export default function Main() {
  const [isFontsLoaded] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Medium': Montserrat_500Medium,
    'Montserrat-SemiBold': Montserrat_600SemiBold,
  });

  if (!isFontsLoaded) {
    return null;
  }

  return <AppNavigator />;
}
