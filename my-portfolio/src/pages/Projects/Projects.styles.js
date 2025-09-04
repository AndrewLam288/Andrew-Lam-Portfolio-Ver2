import styled from "styled-components";
import { Card as BaseCard } from "../../components/Layout/AppLayout.styles";

/* Section wrapper (box around Contributions / Projects) */
export const SectionCard = styled(BaseCard)`
  padding: 16px;
  margin-bottom: 12px;
`;

/* Section header with a colorful icon */
export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TitleBadge = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: ${({ $bg }) => $bg || "#EAF3FF"};
  color: ${({ $fg }) => $fg || "#1D4ED8"};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 20px;
  svg { width: 14px; height: 14px; }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr)); /* exactly two columns */
  @media (max-width: 980px) {
    grid-template-columns: 1fr; /* stack on narrow screens */
  }
`;

export const Card = styled(BaseCard)`
  padding: 12px;
  display: grid;
  gap: 6px;
  min-width: 0;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
`;

export const NameRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  strong {
    flex: 1 1 auto;
    min-width: 0;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/* Small GitHub-ish square before each project name */
export const ProjectBadge = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $public }) => ($public ? "#DCFCE7" : "#E5E7EB")};
  color: ${({ $public }) => ($public ? "#166534" : "#475569")};
  svg { width: 12px; height: 12px; }
`;

/* Public/Private badge (green vs gray) */
export const StatusTag = styled.span`
  flex: 0 0 auto;
  font-size: 12px;
  line-height: 1;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ $public, theme }) => ($public ? "#14532d" : theme.colors.subtext)};
  background: ${({ $public }) => ($public ? "#bbf7d0" : "#eee")};
`;

export const Meta = styled.small`
  color: ${({ theme }) => theme.colors.subtext};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 6px;
  flex-wrap: wrap;
  min-width: 0;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 13px;
  white-space: nowrap;
  &:hover { filter: brightness(0.98); }
`;

export const CalendarWrap = styled.div`
  margin-top: 10px;
  overflow-x: auto;
`;

export const ContribRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 12px;
  margin-top: 10px;
`;

export const YearList = styled.div`
  display: grid;
  gap: 10px;
`;

export const YearButton = styled.button`
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  border-radius: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &[aria-current="true"] {
    background: #1f6feb;
    color: #fff;
    border-color: #1f6feb;
  }
`;
