import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrap = styled(Card)`padding: 16px;`
export const Row = styled.div`display: flex; gap: 12px; align-items: center;`
export const IconBtn = styled.a`
  width: 36px; height: 36px; border-radius: 50%;
  display: grid; place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`
