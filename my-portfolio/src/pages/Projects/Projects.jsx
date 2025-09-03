import { Section, Title, Grid, Item, Chip, TagRow } from "./Projects.styles";

const projects = [
  { name: "PMtron", visibility: "Public", created: "Aug 2025" },
  { name: "Pet Boarding", visibility: "Private", created: "Jul 2025" },
  { name: "BuChatGo", visibility: "Public", created: "May 2025" },
  { name: "Admin Dashboard", visibility: "Private", created: "Jan 2025" },
];

const featured = [
  { name: "L-CORE HRIS", desc: "Web-based HRIS to streamline operations.", tags: ["React", "styled-components", "Ant Design"] },
  { name: "Zyphora Crypto", desc: "Fictional crypto landing page.", tags: ["React JS", "Vite", "emotion"] },
];

export default function Projects() {
  return (
    <>
      <Section>
        <Title>Contributions</Title>
        <div style={{ opacity: 0.8, fontSize: 13, marginTop: 6 }}>
          GitHub heatmap placeholder
        </div>
      </Section>

      <Section>
        <Title>Projects</Title>
        <Grid style={{ marginTop: 12 }}>
          {projects.map((p) => (
            <Item key={p.name}>
              <strong>{p.name}</strong>
              <div style={{ fontSize: 12 }}>Created on {p.created}</div>
              <div style={{ marginTop: 8 }}>
                <Chip>{p.visibility}</Chip>
              </div>
            </Item>
          ))}
        </Grid>
      </Section>

      <Section>
        <Title>Featured</Title>
        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {featured.map((f) => (
            <Item key={f.name}>
              <strong>{f.name}</strong>
              <p style={{ margin: "6px 0 10px" }}>{f.desc}</p>
              <TagRow>
                {f.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </TagRow>
            </Item>
          ))}
        </div>
      </Section>
    </>
  );
}
