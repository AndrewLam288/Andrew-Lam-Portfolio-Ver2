import AppLayout from '../../components/Layout/AppLayout'
import useTheme from '../../hooks/useTheme'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../styles/theme'
import { GlobalStyle } from '../../styles/GlobalStyle'

export default function Home() {
  const { mode, toggle } = useTheme()
  const theme = mode === 'dark' ? dark : light

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppLayout mode={mode} onToggleTheme={toggle} />
    </ThemeProvider>
  )
}
