import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrapper = styled(Card)`
  position: sticky;
  top: 24px;
  height: fit-content;
  padding: 20px;
`

export const Avatar = styled.div`
  width: 88px; height: 88px; border-radius: 50%;
  background: ${({ theme }) => theme.colors.chip};
  margin-bottom: 12px;
`

export const Name = styled.h2`
  font-size: 18px; margin: 6px 0 2px;
`

export const Role = styled.div`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 14px; margin-bottom: 14px;
`

export const ResumeBtn = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
`

export const Nav = styled.nav`
  margin-top: 18px;
  display: grid; gap: 10px;
`

export const NavLinkItem = styled.a`
  padding: 10px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  &:hover { background: ${({ theme }) => theme.colors.chip}; }
`
