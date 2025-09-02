import { FaSun, FaMoon } from 'react-icons/fa'
import styled from 'styled-components'

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.subtext};
  cursor: pointer;
`

export default function ThemeToggle({ mode, onToggle }) {
  return (
    <Toggle onClick={onToggle} aria-label="Toggle theme">
      {mode === 'dark' ? <FaSun /> : <FaMoon />} {mode === 'dark' ? 'Light' : 'Dark'} mode
    </Toggle>
  )
}
