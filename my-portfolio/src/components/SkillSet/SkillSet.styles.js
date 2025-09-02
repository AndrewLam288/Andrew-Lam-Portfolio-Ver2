import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrap = styled(Card)`padding: 16px;`
export const Chips = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px;
`
export const Chip = styled.span`
  background: ${({ theme }) => theme.colors.chip};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 12px;
`
