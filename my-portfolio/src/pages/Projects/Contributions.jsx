import GitHubCalendar from "react-github-calendar";
import { SectionCard, TitleRow, TitleBadge, SectionTitle } from "./Projects.styles";
import { FiGithub } from "react-icons/fi";

export default function Contributions({ username, mode = "light" }) {
  return (
    <SectionCard>
      <TitleRow>
        <TitleBadge bg="#F1F5FF" fg="#0F172A"><FiGithub /></TitleBadge>
        <SectionTitle>Contributions</SectionTitle>
      </TitleRow>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <GitHubCalendar
          username={username}
          colorScheme={mode === "dark" ? "dark" : "light"}
          blockSize={12}
          blockMargin={3}
          fontSize={12}
        />
      </a>
    </SectionCard>
  );
}
