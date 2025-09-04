import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { fetchProjects } from "../../services/cms";
import {
  SectionCard, TitleRow, TitleBadge, SectionTitle,
  Grid, Card, HeaderRow, NameRow, ProjectBadge,
  StatusTag, Meta, Buttons, LinkButton, CalendarWrap,
  ContribRow, YearList, YearButton
} from "./Projects.styles";
import { FiExternalLink, FiGithub, FiFolder, FiBookmark } from "react-icons/fi";
import { GoRepo } from "react-icons/go";

const GITHUB_USERNAME = "AndrewLam288"; // <-- your GitHub handle

export default function Projects() {
  const [items, setItems] = useState([]);
  const NOW = new Date().getFullYear();
  const [year, setYear] = useState(NOW);
  const years = [NOW, NOW - 1, NOW - 2];

  useEffect(() => {
    fetchProjects().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <>
      {/* Contributions box */}
      <SectionCard>
        <TitleRow>
          <TitleBadge $bg="#F1F5FF" $fg="#0F172A"><FiGithub /></TitleBadge>
          <SectionTitle>Contributions</SectionTitle>
        </TitleRow>
        <ContribRow>
          <CalendarWrap>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme={document.documentElement.classList.contains("dark") ? "dark" : "light"}
                blockSize={12}
                blockMargin={3}
                fontSize={12}
                year={year}
              />
            </a>
          </CalendarWrap>

          <YearList>
            {years.map((y) => (
              <YearButton
                key={y}
                aria-current={y === year ? "true" : undefined}
                onClick={() => setYear(y)}
              >
                {y}
              </YearButton>
            ))}
          </YearList>
        </ContribRow>

      </SectionCard>

      {/* Projects box (your existing tiles kept intact) */}
      <SectionCard>
        <TitleRow>
          <TitleBadge $bg="#E1F0FF" $fg="#1D4ED8"><FiFolder /></TitleBadge>
          <SectionTitle>Projects</SectionTitle>
        </TitleRow>

        <Grid>
          {items.map((p) => {
            const isPublic = (p.visibility || "").toLowerCase() === "public";
            const createdLabel =
              p.createdLabel ??
              new Date(p.date).toLocaleString("en-US", { month: "short", year: "numeric" });

            return (
              <Card key={p.id}>
                <HeaderRow>
                  <NameRow>
                    <ProjectBadge $public={isPublic}><GoRepo /></ProjectBadge>
                    <strong>{p.title}</strong>
                  </NameRow>

                  <StatusTag $public={isPublic}>
                    {isPublic ? "Public" : "Private"}
                  </StatusTag>
                </HeaderRow>

                <Meta>Created on {createdLabel}</Meta>

                <Buttons>
                  {p.demoUrl && (
                    <LinkButton
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live demo"
                    >
                      <FiExternalLink /> Live demo
                    </LinkButton>
                  )}

                  {p.repoUrl && (
                    <LinkButton
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub repository"
                    >
                      <FiGithub /> GitHub
                    </LinkButton>
                  )}
                </Buttons>
              </Card>
            );
          })}
        </Grid>
      </SectionCard>
    </>
  );
}
