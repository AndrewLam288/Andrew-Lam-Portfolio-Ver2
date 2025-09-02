import styled from 'styled-components'

export const Shell = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  grid-template-columns: 280px 1fr 380px;
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 260px 1fr 340px;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.section`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
`;

