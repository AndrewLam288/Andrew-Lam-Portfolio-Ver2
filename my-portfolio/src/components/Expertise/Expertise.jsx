import { useEffect, useRef, useState } from 'react';
import {
  Wrap, List, Row, IconBadge, Title, Chevron, Divider, Panel, Body
} from './Expertise.styles';
import { FaLaptopCode, FaServer, FaPaintBrush, FaGamepad } from "react-icons/fa";

const rows = [
  {
    title: "Full-Stack Development",
    text: `I enjoy building complete applications from the ground up - everything 
    from setting up REST APIs with Node.js or ASP.NET MVC to wiring up secure 
    authentication, user management, and interactive front-ends with React 
    and Angular. My projects focus on being clean, scalable, and easy to use.`,
    icon: <FaLaptopCode />,
    badge: "linear-gradient(135deg,#a78bfa,#6366f1)",
  },
  {
    title: "Backend & DevOps",
    text: `Behind the scenes, I am comfortable working with C#, Java, SQL Server, 
    MySQL, and MongoDB to make sure data flows reliably and securely. I have 
    also gained experience with Entity Framework and CI/CD pipelines, which 
    help keep code deployment smooth and professional.`,
    icon: <FaServer />,
    badge: "linear-gradient(135deg,#f59e0b,#f472b6)",
  },
  {
    title: "Frontend & UI/UX",
    text: `Design matters to me and I like creating responsive, user-friendly 
    interfaces with modern tools like React, Bootstrap, and CSS. I focus 
    on accessibility and clean layouts so that apps don't just work, 
    but feel intuitive to the people who use them.`,
    icon: <FaPaintBrush />,
    badge: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  {
    title: "Game Development",
    text: `I have always loved horror games, especially the logic and process that 
    goes into making worlds feel real and immersive. I am currently learning 
    and practicing with Unity and C#, experimenting with prototypes, 
    atmosphere, and real-time interactions. Game development is an exciting 
    journey for me, and I am eager to keep pushing my skills further as I grow.`,
    icon: <FaGamepad />,
    badge: "linear-gradient(135deg,#60a5fa,#22c55e)",
  },
];

export default function Expertise() {
  const [open, setOpen] = useState(-1);
  const refs = useRef({});
  const [heights, setHeights] = useState({});

  useEffect(() => {
    const h = {};
    rows.forEach((_, i) => { h[i] = refs.current[i]?.scrollHeight || 0; });
    setHeights(h);
  }, []);

  const toggle = (i) => setOpen((p) => (p === i ? -1 : i));

  return (
    <Wrap>
      <h3 style={{ marginTop: 0, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>👥</span> Expertise
      </h3>

      <List>
        {rows.map((r, i) => {
          const expanded = open === i;
          return (
            <div key={r.title}>
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

              {i !== rows.length - 1 && <Divider />}
            </div>
          );
        })}
      </List>
    </Wrap>
  );
}
