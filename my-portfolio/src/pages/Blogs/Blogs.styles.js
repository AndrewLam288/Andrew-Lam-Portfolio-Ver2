import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

export const Title = styled.h3`
  margin: 0 0 12px;
`;

export const Feed = styled.div`
  display: grid;
  gap: 12px;
`;

export const Post = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

export const Head = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Date = styled.div`
  font-size: 12px;
  opacity: 0.8;
`;

export const Body = styled.div`
  padding: 16px;
`;
