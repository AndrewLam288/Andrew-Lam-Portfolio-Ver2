import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

export const Title = styled.h3`
  margin: 0 0 12px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const Tile = styled(Card)`
  padding: 12px;
  display: grid;
  gap: 6px;
`;

export const Small = styled.small`
  color: ${({ theme }) => theme.colors.subtext};
`;

export const Button = styled.button`
  justify-self: start;
  padding: 6px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`;
