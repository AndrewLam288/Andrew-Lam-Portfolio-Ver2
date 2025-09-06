// src/components/Hero/Hero.styles.js
import styled, { keyframes } from "styled-components";

export const HeroCard = styled.section`
  position: relative;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  min-height: 260px;     /* adjust to your taste */
  isolation: isolate;
`;

/* <-- THIS is the missing export */
export const Banner = styled.div`
  position: absolute;
  inset: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: saturate(1.05);
  z-index: 0;
`;

/* Top-left date */
export const TopBar = styled.div`
  position: absolute;
  inset: 0 0 auto 0;
  display: flex;
  align-items: flex-start;
  padding: 14px 16px;
  pointer-events: none;
  z-index: 2;
`;

export const DatePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
  background: rgba(0,0,0,.38);
  backdrop-filter: blur(2px);
  pointer-events: auto;
  svg { width: 18px; height: 18px; opacity: .9; }
`;

/* Bottom-left greeting */
export const TextOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 22px;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.18));
  z-index: 2;
`;

const revealFade = keyframes`
  0%   { clip-path: inset(0 100% 0 0); opacity: 0; }
  12%  { clip-path: inset(0 100% 0 0); opacity: 1; }
  45%  { clip-path: inset(0 0%   0 0); opacity: 1; }
  75%  { clip-path: inset(0 0%   0 0); opacity: 1; }
  100% { clip-path: inset(0 0%   0 0); opacity: 0; }
`;

export const Greeting = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 600;
  letter-spacing: .5px;
  text-shadow: 0 2px 22px rgba(0,0,0,.45);
  white-space: nowrap;
  font-size: clamp(10px, 3.6vw, 20px);
  will-change: clip-path, opacity;
  animation: ${revealFade} 5.8s ease-in-out infinite;
`;
