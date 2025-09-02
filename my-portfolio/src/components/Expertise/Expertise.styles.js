import styled from 'styled-components';
import { Card } from '../Layout/AppLayout.styles';

export const Wrap = styled(Card)`
  padding: 16px;

  /* Fixed height so opening rows never pushes other boxes */
  height: clamp(360px, 48vh, 520px);

  display: flex;
  flex-direction: column;
  overflow: hidden; /* the inner List will scroll */
`;

export const List = styled.div`
  flex: 1;
  overflow: auto;

  /* Reserve gutter so layout never shifts */
  scrollbar-gutter: stable;

  /* Hide scrollbar UI (keeps scrolling) */
  scrollbar-width: none;            /* Firefox */
  -ms-overflow-style: none;         /* IE/Edge legacy */
  &::-webkit-scrollbar {            /* Chrome/Safari/Edge */
    width: 0;
    height: 0;
  }

  padding-right: 4px;
`;

export const Row = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 16px; /* icon | title | chevron */
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
`;

export const Panel = styled.div`
  overflow: hidden;
  max-height: ${({ $open, $h }) => ($open ? `${$h}px` : '0px')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition:
    max-height .28s cubic-bezier(.2,.8,.2,1),
    opacity .22s ease;
`;

export const Body = styled.div`
  color: ${({ theme }) => theme.colors.subtext};
  font-size: 14px;
  padding: 8px 4px 14px 52px; /* indent under title */
`;
