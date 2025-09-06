import { useEffect, useRef, useState } from "react";
import { Wrap, Gallery, Tile, ArrowBtn, FaderLeft, FaderRight } from "./Featured.styles";
import { fetchFeatured } from "../../services/cms";

export default function Featured() {
  const [items, setItems] = useState([]);
  const railRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    fetchFeatured().then(setItems).catch(() => setItems([]));
  }, []);

  const updateEdges = () => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
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

  const step = () => {
    const el = railRef.current;
    if (!el) return 600;
    // near a viewport width; feels like Skill Set
    return Math.max(el.clientWidth * 0.9, el.clientWidth / 1.05);
  };

  const animateTo = (left) => {
    const el = railRef.current;
    if (!el) return;
    const start = el.scrollLeft;
    const dist = left - start;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 420);
      el.scrollLeft = start + dist * ease(p);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const left = () => {
    const el = railRef.current;
    if (!el) return;
    animateTo(Math.max(0, el.scrollLeft - step()));
  };

  const right = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    animateTo(Math.min(max, el.scrollLeft + step()));
  };

  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Featured</h3>

      {!atStart && <FaderLeft />}
      {!atEnd && <FaderRight />}

      <ArrowBtn data-side="left" onClick={left} disabled={atStart}>‹</ArrowBtn>
      <ArrowBtn data-side="right" onClick={right} disabled={atEnd}>›</ArrowBtn>

      <Gallery ref={railRef}>
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Tile $bg={it.img} />
          </a>
        ))}
      </Gallery>
    </Wrap>
  );
}
