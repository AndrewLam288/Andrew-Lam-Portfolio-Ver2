import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

export const SectionCard = styled(Card)`
  padding: 16px;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  margin: 0 0 6px;
`;

export const Lead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.subtext};
`;
