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

export const Header = styled.h3`
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const Rail = styled.div`
  display: flex;
  gap: 28px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  padding: 6px 6px 14px;
  cursor: grab;

  &.dragging {
    cursor: grabbing;
    user-select: none;
  }
`;

export const Item = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
`;

export const IconHole = styled.div`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
`;

export const Label = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
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
  transition: transform .12s ease, background .12s ease;
  user-select: none;
  touch-action: manipulation;
  
  &[data-side="left"]  { left: 6px; }
  &[data-side="right"] { right: 6px; }

  &:hover { transform: translateY(-50%) scale(1.06); }
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
