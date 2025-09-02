import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import { light, dark } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import AppRoutes from './routes';

export default function App() {
  const { mode, toggle } = useTheme();
  const theme = mode === 'dark' ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes mode={mode} onToggleTheme={toggle} />
      </BrowserRouter>
    </ThemeProvider>
  );
}
