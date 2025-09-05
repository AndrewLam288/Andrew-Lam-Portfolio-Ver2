import { useEffect, useRef, useState } from "react";
import {
  Wrap, List, Row, IconBadge, Title, Chevron, Divider, Panel, Body
} from "./Expertise.styles";
import { FaLaptopCode, FaServer, FaPaintBrush, FaGamepad } from "react-icons/fa";
import { fetchExpertise } from "../../services/cms";

const ORDER = [
  "Full-Stack Development",
  "Backend & DevOps",
  "Frontend & UI/UX",
  "Game Development",
];

const ICON_BY_TITLE = {
  "Full-Stack Development": { icon: <FaLaptopCode />, badge: "linear-gradient(135deg,#a78bfa,#6366f1)" },
  "Backend & DevOps":       { icon: <FaServer />,      badge: "linear-gradient(135deg,#f59e0b,#f472b6)" },
  "Frontend & UI/UX":       { icon: <FaPaintBrush />,  badge: "linear-gradient(135deg,#06b6d4,#3b82f6)" },
  "Game Development":       { icon: <FaGamepad />,     badge: "linear-gradient(135deg,#60a5fa,#22c55e)" },
};

const FALLBACK = [
  { icon: <FaLaptopCode />, badge: "linear-gradient(135deg,#a78bfa,#6366f1)" },
  { icon: <FaServer />,      badge: "linear-gradient(135deg,#f59e0b,#f472b6)" },
  { icon: <FaPaintBrush />,  badge: "linear-gradient(135deg,#06b6d4,#3b82f6)" },
  { icon: <FaGamepad />,     badge: "linear-gradient(135deg,#60a5fa,#22c55e)" },
];

export default function Expertise() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(-1);
  const refs = useRef({});
  const [heights, setHeights] = useState({});

  useEffect(() => {
    fetchExpertise()
      .then((list) => {
  const data = Array.isArray(list) ? list : [];
  const mapped = data.map((e, i) => {
    const theme = ICON_BY_TITLE[e.title] || FALLBACK[i % FALLBACK.length];
    return {
      id: e.id || e.title || i,
      title: e.title,
      text: e.description,
      icon: theme.icon,
      badge: theme.badge,
    };
  });

  mapped.sort((a, b) => {
    const ai = ORDER.indexOf(a.title);
    const bi = ORDER.indexOf(b.title);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  setItems(mapped);
})
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    const h = {};
    items.forEach((_, i) => {
      const el = refs.current[i];
      if (el) h[i] = el.scrollHeight || 0;
    });
    setHeights(h);
  }, [items]);

  const toggle = (i) => setOpen((p) => (p === i ? -1 : i));

  return (
    <>
      <Wrap>
        <h3 style={{ marginTop: 0, marginBottom: 6, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 18 }}>👥</span> Expertise
        </h3>

        <List>
          {items.map((r, i) => {
            const expanded = open === i;
            return (
              <div key={r.id}>
                <Row onClick={() => toggle(i)} aria-expanded={expanded} aria-controls={`exp-${i}`}>
                  <IconBadge style={{ background: r.badge }}>{r.icon}</IconBadge>
                  <Title>{r.title}</Title>
                  <Chevron $open={expanded}>▾</Chevron>
                </Row>

                <Panel $open={expanded} $h={heights[i] ?? 0}>
                  <Body
                    id={`exp-${i}`}
                    ref={(el) => (refs.current[i] = el)}
                    role="region"
                    aria-label={r.title}
                  >
                    {r.text}
                  </Body>
                </Panel>

                {i !== items.length - 1 && <Divider />}
              </div>
            );
          })}
        </List>
      </Wrap>
    </>
  );
}
