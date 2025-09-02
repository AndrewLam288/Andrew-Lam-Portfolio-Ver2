import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

/* Full-width row so Footer can space-between it cleanly */
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Label: icon + text */
const Label = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  svg { font-size: 14px; }
`;

/* Switch with knob on the right */
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 22px;
  cursor: pointer;

  input { opacity: 0; width: 0; height: 0; }

  /* track */
  span {
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.border};
    border-radius: 999px;
    transition: background 0.2s ease;
  }

  /* knob */
  span::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0,0,0,.25);
    transition: transform 0.2s ease;
  }

  input:checked + span {
    background: ${({ theme }) => theme.colors.accent};
  }
  input:checked + span::before {
    transform: translateX(20px);
  }
`;

export default function ThemeToggle({ mode, onToggle }) {
  const isDark = mode === 'dark';

  // Always provide a concrete handler so React sees `onChange`.
  const handleChange = () => {
    // only call if parent supplied it
    if (typeof onToggle === 'function') onToggle();
  };

  return (
    <Row>
      <Label>
        {isDark ? <FaMoon /> : <FaSun />}
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Label>

      <Switch aria-label="Toggle theme">
        <input
          type="checkbox"
          role="switch"
          aria-checked={isDark}
          checked={isDark}
          onChange={handleChange}
        />
        <span />
      </Switch>
    </Row>
  );
}
