import { useEffect, useRef, useState } from "react";
import {
  Wrap, Header, Rail, Item, IconHole, Label,
  ArrowBtn, FaderLeft, FaderRight
} from "./SkillSet.styles";
import { Icon as Iconify } from "@iconify/react";
import { skills } from "./skills";

export default function SkillSet() {
  const railRef = useRef(null);
  const firstItemRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [step, setStep] = useState(280);

  useEffect(() => {
    const el = firstItemRef.current;
    if (!el) return;
    const { width } = el.getBoundingClientRect();
    setStep(Math.round(width + 20));
  }, []);

  const updateEdges = () => {
    const el = railRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const epsilon = 3;
    const atStartNow = scrollLeft <= epsilon;
    const atEndNow =
      Math.ceil(scrollLeft + clientWidth) >= Math.floor(scrollWidth) - epsilon;
    setAtStart(atStartNow);
    setAtEnd(atEndNow);
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
  }, []);

  const animateTo = (targetLeft, duration = 520) => {
    const el = railRef.current;
    if (!el) return;

    const start = el.scrollLeft;
    const dist = targetLeft - start;
    const t0 = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      el.scrollLeft = start + dist * easeOutCubic(p);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const scrollLeftBy = () => {
    const el = railRef.current;
    if (!el) return;
    animateTo(Math.max(0, el.scrollLeft - step));
  };

  const scrollRightBy = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    animateTo(Math.min(max, el.scrollLeft + step));
  };

  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const getX = (e) => ("touches" in e ? e.touches[0].clientX : e.clientX);

  const onDragStart = (e) => {
    const rail = railRef.current;
    if (!rail) return;
    drag.current.active = true;
    drag.current.startX = getX(e);
    drag.current.startLeft = rail.scrollLeft;
    rail.classList.add("dragging");
  };

  const onDragMove = (e) => {
    const rail = railRef.current;
    if (!rail || !drag.current.active) return;
    const dx = getX(e) - drag.current.startX;
    rail.scrollLeft = drag.current.startLeft - dx;
  };

  const onDragEnd = () => {
    const rail = railRef.current;
    if (!rail) return;
    drag.current.active = false;
    rail.classList.remove("dragging");
  };

  return (
    <Wrap>
      <Header>Skill Set</Header>

      {!atStart && <FaderLeft />}
      {!atEnd && <FaderRight />}

      <ArrowBtn
        aria-label="Scroll left"
        onClick={scrollLeftBy}
        data-side="left"
        disabled={atStart}
      >‹</ArrowBtn>

      <ArrowBtn
        aria-label="Scroll right"
        onClick={scrollRightBy}
        data-side="right"
        disabled={atEnd}
      >›</ArrowBtn>

      <Rail
        ref={railRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseLeave={onDragEnd}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={(e) => { onDragMove(e); e.preventDefault(); }}
        onTouchEnd={onDragEnd}
      >
        {skills.map(({ name, icon, color }, i) => (
          <Item key={name} ref={i === 0 ? firstItemRef : undefined}>
            <IconHole>
              <Iconify icon={icon} width="28" height="28"
                       style={color ? { color } : undefined} />
            </IconHole>
            <Label>{name}</Label>
          </Item>
        ))}
      </Rail>
    </Wrap>
  );
}
