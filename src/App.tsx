import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { Routes } from '@/routes';
import { store } from '@/store';
import { theme } from '@/theme';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <StatusBar />
            <Routes />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
