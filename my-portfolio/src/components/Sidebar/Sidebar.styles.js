// src/components/Sidebar/Sidebar.styles.js
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Card } from '../Layout/AppLayout.styles';

/* --- container --- */
export const Wrapper = styled(Card)`
  position: sticky;
  top: 24px;
  height: fit-content;
  padding: 18px;
  border-radius: 20px;
`;

/* --- header: avatar + text --- */
export const Header = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Name = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 2px 0;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text};
`;

export const Role = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.subtext};
`;

/* --- resume button (neutral pill, visible hover in light mode) --- */
export const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  transition: background .15s ease, border-color .15s ease, transform .08s ease;
  text-decoration: none;
  cursor: pointer;

  svg { font-size: 16px; }

  &:hover {
    background: ${({ theme }) => theme.colors.hover || theme.colors.chip};
    border-color: ${({ theme }) => theme.colors.chipBorder || theme.colors.border};
    transform: translateY(-1px);
  }
`;

/* --- separators & nav --- */
export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 10px 0;
  opacity: .9;
`;

export const Nav = styled.nav`
  display: grid;
  gap: 4px;
`;

/* --- nav item (active pill + visible hover in light mode) --- */
export const LinkItem = styled(NavLink)`
  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  border: 1px solid transparent;
  transition: background .15s ease, border-color .15s ease;

  &.active {
    background: ${({ theme }) => theme.colors.chip};
    border: 1px solid ${({ theme }) => theme.colors.chipBorder || theme.colors.border};
    font-weight: 600;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft || theme.colors.chip};
    border-color: ${({ theme }) => theme.colors.chipBorder || theme.colors.border};
  }
`;

/* --- footer row where the theme toggle sits --- */
export const Footer = styled.div`
  margin-top: 14px;
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;        /* vertical center */
  justify-content: space-between;
  min-height: 44px;           /* consistent height across themes */
`;

/* --- tiny copyright text --- */
export const Muted = styled.p`
  margin: 8px 2px 0;
  font-size: 11px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.subtext};
  opacity: .9;
`;
