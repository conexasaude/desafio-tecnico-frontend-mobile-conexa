import React from 'react';
import { registerRootComponent } from 'expo';
import { AppNavigator } from '~/presentation/navigation/navigators';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enGB, registerTranslation } from 'react-native-paper-dates';

// Context
import { AuthProvider } from '~/presentation/context';

// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from '~/presentation/styles';

registerRootComponent(Main);
registerTranslation('pt', enGB);

export default function Main() {
  const [isFontsLoaded] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Medium': Montserrat_500Medium,
    'Montserrat-SemiBold': Montserrat_600SemiBold,
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <SafeAreaProvider>
          <AuthProvider>
            <AppNavigator />
          </AuthProvider>
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
