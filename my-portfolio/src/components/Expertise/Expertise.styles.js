import styled from 'styled-components';
import { Card } from '../Layout/AppLayout.styles';

export const Wrap = styled(Card)`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div``;           // no scroll here

export const Row = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 16px;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  background: none;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft || theme.colors.chip};
    border-radius: 10px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;

export const IconBadge = styled.span`
  width: 36px; height: 36px;
  border-radius: 10px;
  display: grid; place-items: center;
  color: #fff;
  font-size: 18px;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Chevron = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.subtext};
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: transform .22s cubic-bezier(.2,.8,.2,1);
  justify-self: end;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 6px 0;
`;

export const Panel = styled.div`
  overflow: hidden;
  max-height: ${({ $open, $h }) => ($open ? `${$h}px` : '0px')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    max-height .34s cubic-bezier(.2,.8,.2,1),
    opacity .24s ease;
`;

export const Body = styled.div`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 14px;
  line-height: 1.6;
  padding: 8px 4px 14px 52px;
`;
