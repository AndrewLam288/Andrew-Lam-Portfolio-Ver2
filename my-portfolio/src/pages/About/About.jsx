import { useEffect, useState } from "react";
import {
  Section, TitleRow, TitleText, TitleBadge,
  Body, BodyCollapsed, Toggle,
  List, Row, Sub, Note, Title,
  ItemHeader, Logo, LogoSlot, TitleStack
} from "./About.styles";
import { FiUser, FiBookOpen, FiBriefcase, FiAward } from "react-icons/fi";

import {
  fetchAboutHtml,
  fetchEducation,
  fetchExperience,
  fetchCertificatesPreview,
} from "../../services/cms";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [expOpen, setExpOpen] = useState({});
  const toggleExp = (i) => setExpOpen((s) => ({ ...s, [i]: !s[i] }));

  const [aboutHtml, setAboutHtml] = useState("");
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchAboutHtml().then(setAboutHtml).catch(() => setAboutHtml(""));
    fetchEducation().then(setEducation).catch(() => setEducation([]));
    fetchExperience().then(setExperience).catch(() => setExperience([]));
    fetchCertificatesPreview(1).then(setCertificates).catch(() => setCertificates([])); // show 1 like before
  }, []);

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
            <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
            <Toggle type="button" aria-expanded onClick={() => setExpanded(false)}>
              See less
            </Toggle>
          </Body>
        ) : (
          <>
            <BodyCollapsed style={{ marginTop: 8 }}>
              <div dangerouslySetInnerHTML={{ __html: aboutHtml }} />
            </BodyCollapsed>
            <Toggle type="button" aria-expanded={false} onClick={() => setExpanded(true)}>
              See more
            </Toggle>
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
            <Row key={e.id || e.school}>
              <ItemHeader>
                <LogoSlot>{e.logoUrl && <Logo src={e.logoUrl} alt={e.school} />}</LogoSlot>
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
            <Row key={x.id || `${x.role}-${i}`}>
              <ItemHeader>
                <LogoSlot>{x.logoUrl && <Logo src={x.logoUrl} alt={x.org} />}</LogoSlot>
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
            <Row key={c.id || c.title}>
              <ItemHeader>
                <LogoSlot>{c.logoUrl && <Logo src={c.logoUrl} alt={c.issuer} />}</LogoSlot>
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
