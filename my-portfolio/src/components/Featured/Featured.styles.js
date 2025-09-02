import styled from 'styled-components'
import { Card } from '../Layout/AppLayout.styles'

export const Wrap = styled(Card)`
  padding: 16px;
`

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 980px) { grid-template-columns: 1fr; }
`

export const Tile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  height: 160px;
  background: ${({ theme }) => theme.colors.hover};
  transition: border-color .15s ease, background .15s ease, transform .1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft};
    border-color: ${({ theme }) => theme.colors.chipBorder};
    transform: translateY(-1px);
  }
`;

