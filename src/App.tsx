// Redux
import { Provider } from 'react-redux'
import { store, persistor } from '@store'
import { PersistGate } from 'redux-persist/integration/react'

// Theme
import { ThemeProvider } from '@emotion/react'
import { theme } from '@theme'

// React
import { SafeAreaView, StatusBar } from 'react-native'

// Routes
import { Routes } from '@routes'

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <Routes />
          </SafeAreaView>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
