import { Title, Grid, Tile, Small, Button } from "./Achievements.styles";

const achievements = [
  { title: "British Council IELTS", issuer: "British Council", date: "March 2022" },
];

export default function Achievements() {
  return (
    <>
      <Title>Licenses & Certifications</Title>
      <Grid>
        {achievements.map((a) => (
          <Tile key={a.title}>
            <strong>{a.title}</strong>
            <Small>{a.org} • Issued {a.date}</Small>
            <Button>Show Credential</Button>
          </Tile>
        ))}
      </Grid>
    </>
  );
}
