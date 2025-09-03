import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

/* Section card */
export const Section = styled(Card)`
  padding: 16px;
  margin-bottom: 12px;
`;

/* Simple h3 for other sections (Education/Experience/Certificates) */
export const Title = styled.h3`
  margin: 0;
`;

/* Body text: slightly smaller than global base */
export const Body = styled.div`
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;      /* <-- keep bullets/newlines for strings */

  p { margin: 0 0 10px; }
  a { color: ${({ theme }) => theme.colors.text}; }
  b, strong { font-weight: 600; }
`;

/* Collapsed: clamp + subtle fade at bottom */
export const BodyCollapsed = styled(Body)`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 26px;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      ${({ theme }) => theme.colors.surface} 70%
    );
    pointer-events: none;
  }
`;

/* See more / See less */
export const Toggle = styled.button`
  display: inline-block;
  margin-top: 6px;
  padding: 0;
  background: transparent;
  border: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.subtext};
  cursor: pointer;

  &:hover { text-decoration: underline; }
`;

/* Lists below About */
export const List = styled.div`
  display: grid;
  gap: 12px;
`;
export const Row = styled(Card)`padding: 12px;`;

export const Sub = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.subtext};
  margin-top: 2px;
`;
export const Note = styled.div`
  font-size: 12px;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-line;   /* <-- respects \n in the string */
`;

/* Icon + title row for the About section only */
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TitleIcon = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`;
export const TitleText = styled.h3`
  margin: 0;
  /* no font-size override -> uses your global h3 */
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

// Circle badge for colorful section icons
export const TitleBadge = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: ${({ bg }) => bg || "transparent"};
  color: ${({ fg, theme }) => fg || theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

// Header row inside each list item (logo + title)
export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 2px;
  border-radius: 6px;
  display: block;
`;

export const LogoSlot = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 6px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;

  /* keep spacing tight & consistent */
  > .title { margin: 0; }
`;
