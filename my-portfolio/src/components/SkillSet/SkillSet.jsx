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
  const [cardWidth, setCardWidth] = useState(280); // measured later

  // --- measurements ---------------------------------------------------------
  const measure = () => {
    // card width (icon + label + internal padding)
    const node = firstItemRef.current;
    if (node) {
      const { width } = node.getBoundingClientRect();
      setCardWidth(Math.max(180, Math.round(width))); // safety floor
    }
    updateEdges();
  };

  // how far to scroll per click
  const getStep = () => {
    const el = railRef.current;
    if (!el) return 600;
    // almost a viewport, but never less than 2 cards
    return Math.max(el.clientWidth * 0.9, cardWidth * 2);
  };

  const updateEdges = () => {
    const el = railRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const nearStart = scrollLeft <= 2;
    const nearEnd = scrollLeft + clientWidth >= scrollWidth - 2;
    setAtStart(nearStart);
    setAtEnd(nearEnd);
  };

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    // initial measure
    measure();

    // keep edges/size accurate
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- smooth scrolling -----------------------------------------------------
  const animateTo = (targetLeft, duration = 520) => {
    const el = railRef.current;
    if (!el) return;

    const start = el.scrollLeft;
    const dist = targetLeft - start;
    if (Math.abs(dist) < 1) return;

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
    const step = getStep();
    animateTo(Math.max(0, el.scrollLeft - step));
  };

  const scrollRightBy = () => {
    const el = railRef.current;
    if (!el) return;
    const step = getStep();
    const max = el.scrollWidth - el.clientWidth;
    animateTo(Math.min(max, el.scrollLeft + step));
  };

  // --- drag to scroll -------------------------------------------------------
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const getX = (e) => ("touches" in e ? e.touches[0].clientX : e.clientX);

  const onDragStart = (e) => {
    const el = railRef.current;
    if (!el) return;
    drag.current.active = true;
    drag.current.startX = getX(e);
    drag.current.startLeft = el.scrollLeft;
    el.classList.add("dragging");
  };

  const onDragMove = (e) => {
    const el = railRef.current;
    if (!el || !drag.current.active) return;
    const dx = getX(e) - drag.current.startX;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const onDragEnd = () => {
    const el = railRef.current;
    if (!el) return;
    drag.current.active = false;
    el.classList.remove("dragging");
  };

  return (
    <Wrap>
      <Header>Skill Set</Header>

      {!atStart && <FaderLeft />}
      {!atEnd && <FaderRight />}

      <ArrowBtn
        type="button"
        aria-label="Scroll left"
        onClick={scrollLeftBy}
        data-side="left"
        disabled={atStart}
      >
        ‹
      </ArrowBtn>

      <ArrowBtn
        type="button"
        aria-label="Scroll right"
        onClick={scrollRightBy}
        data-side="right"
        disabled={atEnd}
      >
        ›
      </ArrowBtn>

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
          <Item key={name} data-card ref={i === 0 ? firstItemRef : undefined}>
            <IconHole>
              <Iconify
                icon={icon}
                width="28"
                height="28"
                style={color ? { color } : undefined}
              />
            </IconHole>
            <Label>{name}</Label>
          </Item>
        ))}
      </Rail>
    </Wrap>
  );
}
