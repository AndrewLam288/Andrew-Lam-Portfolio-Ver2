import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const HeroCard = styled(Card)`
  min-height: 260px;
  padding: 0;
  overflow: hidden;
  display: grid;
`

export const Banner = styled.div`
  min-height: 260px;
  background:
    radial-gradient(60% 80% at 70% 20%, rgba(99,102,241,0.3), transparent 60%),
    linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 60%, #ef4444 100%);
  opacity: .85;
`
