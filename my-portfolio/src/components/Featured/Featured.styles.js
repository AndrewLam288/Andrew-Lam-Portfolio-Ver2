import styled from "styled-components";

export const Wrap = styled.section`
  position: relative;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
`;

export const Gallery = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
  /* show 3 tiles at a time; remaining can scroll */
  grid-auto-columns: calc((100% - 24px) / 3);

  overflow-x: auto;
  overflow-y: hidden;
  padding: 6px 6px 14px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const Tile = styled.div`
  height: 200px;          /* keep your tile size */
  border-radius: 12px;    /* keep your rounding */
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ $bg, theme }) =>
    $bg ? `center / cover no-repeat url(${$bg})` : theme.colors.surface};
`;

export const ArrowBtn = styled.button`
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  z-index: 10;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: grid;
  place-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  user-select: none;
  touch-action: manipulation;

  &[data-side="left"]  { left: 6px; }
  &[data-side="right"] { right: 6px; }
`;

export const FaderLeft = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 36px auto 14px 0;
  width: 46px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.card}, transparent);
  z-index: 1;
`;

export const FaderRight = styled(FaderLeft)`
  inset: 36px 0 14px auto;
  transform: scaleX(-1);
`;
