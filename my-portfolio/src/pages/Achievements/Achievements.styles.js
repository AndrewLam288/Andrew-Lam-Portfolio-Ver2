import styled from "styled-components";
import { Card } from "../../components/Layout/AppLayout.styles";

export const Title = styled.h3`
  margin: 0 0 12px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
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
  cursor: pointer;

  &:hover {
    filter: brightness(0.98);
  }
`;

// Lightbox styles
export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(2px);
`;

export const Box = styled(Card)`
  position: relative;
  width: clamp(320px, 90vw, 980px);
  max-height: 90vh;
  overflow: hidden;
  padding: 12px;
`;

export const CertImage = styled.img`
  display: block;
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 72vh;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MetaRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
`;

// Zoom Viewer styles
export const ZoomViewport = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-height: 72vh;
  overflow: hidden;
  user-select: none;
  cursor: ${({ $isPanning, $canPan }) =>
    $isPanning ? "grabbing" : $canPan ? "grab" : "default"};
  background: transparent;
  overscroll-behavior: contain;
  touch-action: none;
`;

export const ZoomStage = styled.div`
  will-change: transform;
  transform: translate(${({ $tx }) => $tx}px, ${({ $ty }) => $ty}px)
             scale(${({ $scale }) => $scale});
  transform-origin: center top;
  user-select: none;
`;

export const ZoomImg = styled.img`
  display: block;
  max-height: 72vh;
  height: auto;
  width: auto;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  pointer-events: none;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: auto;
  -webkit-user-drag: none;
  user-select: none;
`;

export const SectionCard = styled(Card)`
  padding: 16px;
  margin-bottom: 12px;
`;

