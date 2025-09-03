import { useState } from "react";
import {
  Section, TitleRow, TitleText, TitleBadge,
  Body, BodyCollapsed, Toggle,
  List, Row, Sub, Note, Title,
  ItemHeader, Logo, LogoSlot, TitleStack
} from "./About.styles";
import { FiUser, FiBookOpen, FiBriefcase, FiAward } from "react-icons/fi";
import britishLogo from "../../assets/logos/British Council logo.png";
import umnLogo from "../../assets/logos/UMN Morris Logo.png";
import wssLogo from "../../assets/logos/WebSurfingStudios Logo.png";
import marieLogo from "../../assets/logos/Marie Curie High School logo.png";

const certificates = [
  { title: "British Council IELTS", issuer: "British Council", date: "March 2022", logo: britishLogo },
];

const education = [
  {
    school: "University of Minnesota, Morris — B.A. Computer Science",
    range: "August 2022 - May 2026",
    note: "GPA: 3.431/4.0\nDean's Honor List: Fall 2023, Spring 2024, Fall 2024",
    logo: umnLogo
  },
  
  {
  school: "Marie Curie High School, Ho Chi Minh City",
  range: "Graduated 2022",
  logo: marieLogo
}];

const experience = [
  {
    role: "Junior Software Engineer",
    org: "Web Surfing Studios",
    range: "January 2025 — Present",
    logo: wssLogo,
    note: `• Contributed to the public release of pmtron.com, an AI-powered project management platform, by collaborating with a remote team using agile sprints and version control.
• Participated in DevOps processes, including database migration coordination and environment-specific testing using CI/CD pipelines integrated with Web Surfing Studios’ internal Git platform.
• Improved system scalability and maintainability by introducing a layered architecture and controller services, refactoring direct database access out of controllers.
• Resolved backend deployment failures by debugging Entity Framework migration conflicts and aligning MySQL schemas in CI/CD environments.
• Diagnosed and fixed validation issues across desktop and mobile by debugging JavaScript behavior and refining Bootstrap form error handling.
• Contributed ~21% of the PMtron codebase, ranking #2 in team contributions and accelerating project delivery.`
  },
  {
    role: "Archives for All: Creating Accessible Digital Archives Collections",
    org: "University of Minnesota, Morris",
    range: "August 2025 — Present",
    logo: umnLogo,
    note: `• Improve accessibility of university archival platforms (Digital Well and Prairie Portal).
• Conducted detailed audits of digital collections (events, books, media) against official accessibility standards, identifying errors, limitations, and compliance rates.
• Produced a professional report with quantified findings and actionable recommendations, guiding the Archives toward meeting 2026 accessibility requirements.
• Collaborated with faculty supervisor to ensure recommendations addressed both new and legacy content, balancing compliance with usability.`
  },
  {
    role: "Help Desk Assistant",
    org: "University of Minnesota, Morris",
    range: "August 2022 — May 2023",
    logo: umnLogo,
    note: `• Resolved 300+ hardware and software support requests to improve campus-wide IT responsiveness using diagnostic tools, ticketing systems, and escalation procedures.
• Delivered one-on-one tech support and walkthroughs for login, printing, and network connectivity issues for students and faculty.`
  },
  {
    role: "Custodial Assistant",
    org: "University of Minnesota, Morris",
    range: "August 2022 — May 2023",
    logo: umnLogo,
    note: `• Maintained a clean and orderly environment for 200+ daily library visitors.
• Demonstrated a strong work ethic through early morning shifts and consistent attendance.
• Practiced attention to detail and time management while balancing academic responsibilities.`
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [expOpen, setExpOpen] = useState({});
  const toggleExp = (i) => setExpOpen((s) => ({ ...s, [i]: !s[i] }));

  return (
    <>
      {/* About */}
      <Section>
        <TitleRow>
          <TitleBadge bg="#E1F0FF" fg="#1D4ED8"><FiUser /></TitleBadge>
          <TitleText>About</TitleText>
        </TitleRow>

        {expanded ? (
          <Body style={{ marginTop: 8 }}>
            {/* ...your paragraphs unchanged... */}
            <Toggle type="button" aria-expanded onClick={() => setExpanded(false)}>See less</Toggle>
          </Body>
        ) : (
          <>
            <BodyCollapsed style={{ marginTop: 8 }}>
              {/* ...your collapsed paragraph unchanged... */}
            </BodyCollapsed>
            <Toggle type="button" aria-expanded={false} onClick={() => setExpanded(true)}>See more</Toggle>
          </>
        )}
      </Section>

      {/* Education */}
      <Section>
        <TitleRow>
          <TitleBadge bg="#EAFBE7" fg="#15803D"><FiBookOpen /></TitleBadge>
          <TitleText>Education</TitleText>
        </TitleRow>

        <List style={{ marginTop: 12 }}>
          {education.map((e) => (
            <Row key={e.school}>
              <ItemHeader>
                <LogoSlot>{e.logo && <Logo src={e.logo} alt={e.school} />}</LogoSlot>
                <TitleStack>
                  <div className="title"><strong>{e.school}</strong></div>
                  <Sub>{e.range}</Sub>
                  {e.note && <Note>{e.note}</Note>}
                </TitleStack>
              </ItemHeader>
            </Row>
          ))}
        </List>
      </Section>

      {/* Experience */}
      <Section>
        <TitleRow>
          <TitleBadge bg="#FEF3C7" fg="#B45309"><FiBriefcase /></TitleBadge>
          <TitleText>Experience</TitleText>
        </TitleRow>

        <List style={{ marginTop: 12 }}>
          {experience.map((x, i) => (
            <Row key={`${x.role}-${i}`}>
              <ItemHeader>
                <LogoSlot>{x.logo && <Logo src={x.logo} alt={x.org} />}</LogoSlot>
                <TitleStack>
                  <div className="title"><strong>{x.role}</strong> — {x.org}</div>
                  <Sub>{x.range}</Sub>

                  {x.note && (
                    expOpen[i] ? (
                      <>
                        <Body style={{ marginTop: 6 }}>{x.note}</Body>
                        <Toggle type="button" aria-expanded onClick={() => toggleExp(i)}>See less</Toggle>
                      </>
                    ) : (
                      <>
                        <BodyCollapsed style={{ marginTop: 6 }}>{x.note}</BodyCollapsed>
                        <Toggle type="button" aria-expanded={false} onClick={() => toggleExp(i)}>See more</Toggle>
                      </>
                    )
                  )}
                </TitleStack>
              </ItemHeader>
            </Row>
          ))}
        </List>
      </Section>

      {/* Certificates */}
      <Section>
        <TitleRow>
          <TitleBadge bg="#FDE2E4" fg="#BE123C"><FiAward /></TitleBadge>
          <TitleText>Certificates</TitleText>
        </TitleRow>

        <List style={{ marginTop: 12 }}>
          {certificates.map((c) => (
            <Row key={c.title}>
              <ItemHeader>
                <LogoSlot>{c.logo && <Logo src={c.logo} alt={c.issuer} />}</LogoSlot>
                <TitleStack>
                  <div className="title"><strong>{c.title}</strong></div>
                  <Sub>{c.issuer} • Issued {c.date}</Sub>
                </TitleStack>
              </ItemHeader>
            </Row>
          ))}
        </List>
      </Section>
    </>
  );
}
