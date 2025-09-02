import AppLayout from '../../components/Layout/AppLayout'
import Sidebar from '../../components/Sidebar/Sidebar'
import Hero from '../../components/Hero/Hero'
import CareerStats from '../../components/Stats/CareerStats'
import Featured from '../../components/Featured/Featured'
import SkillSet from '../../components/SkillSet/SkillSet'
import Expertise from '../../components/Expertise/Expertise'
import Contact from '../../components/Contact/Contact'
import { CenterCol, RightCol } from './Home.styles'
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
      <AppLayout>
        <Sidebar mode={mode} onToggle={toggle} />
        <CenterCol>
          <Hero />
          <CareerStats />
          <Featured />
        </CenterCol>
        <RightCol>
          <SkillSet />
          <Expertise />
          <Contact />
        </RightCol>
      </AppLayout>
    </ThemeProvider>
  )
}
