import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrap = styled(Card)`
  padding: 16px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`

export const Stat = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 14px;
  display: grid;
  gap: 4px;
  text-align: center;
`
export const H = styled.h3`font-size: 16px; margin: 0;`
export const P = styled.p`margin: 0; color: ${({ theme }) => theme.colors.subtext}; font-size: 12px;`
