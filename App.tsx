import { StatusBar } from 'react-native';
import MainStack from './src/navigation/Stack'
import { UserProvider } from './src/contexts/UserContext';
import theme from './src/theme/theme'
import { ThemeProvider } from '@emotion/react';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="dark-content"
        />
        <MainStack />
      </UserProvider>
    </ThemeProvider>
  );
}
