import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

export const Section = styled(Card)`
  padding: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const Item = styled(Card)`
  padding: 12px;
`;

export const Chip = styled.span`
  font-size: 12px;
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
`;
