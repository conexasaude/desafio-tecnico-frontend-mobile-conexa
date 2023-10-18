import {Routes} from './routes';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Container} from '@components/container/view';
import {AuthContextProvider} from '@contexts/auth.context';
import {AppContextProvider} from '@contexts/app.context';

export function App() {
  return (
    <Container style={{backgroundColor: theme.COLORS.BLUE_600}}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <AuthContextProvider>
            <Routes />
          </AuthContextProvider>
        </AppContextProvider>
      </ThemeProvider>
    </Container>
  );
}
