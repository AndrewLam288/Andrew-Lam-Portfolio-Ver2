import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrap = styled(Card)`padding: 16px;`
export const Item = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  &:first-child { border-top: 0; }
`
export const Header = styled.button`
  width: 100%; text-align: left; padding: 12px 0;
  background: none; border: 0; color: inherit; font-weight: 600; cursor: pointer;
`
export const Body = styled.div`
  color: ${({ theme }) => theme.colors.subtext};
  padding-bottom: 12px; font-size: 14px;
`
