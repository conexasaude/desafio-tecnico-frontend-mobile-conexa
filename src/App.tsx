import { SafeAreaView, StatusBar } from 'react-native'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@theme'
import { Routes } from '@routes'

export function App() {
  return (
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
  )
}
