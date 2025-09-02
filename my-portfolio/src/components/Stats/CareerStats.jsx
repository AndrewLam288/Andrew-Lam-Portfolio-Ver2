import { Wrap, Grid, Stat, H, P } from './CareerStats.styles'

export default function CareerStats() {
  const stats = [
    { value: '2', label: 'years' },
    { value: '20', label: 'Certificates' },
    { value: '12', label: 'Projects' },
    { value: '20', label: 'Technologies' },
  ]
  return (
    <Wrap>
      <H>Career Stats</H>
      <Grid>
        {stats.map((s) => (
          <Stat key={s.label}>
            <H style={{ fontSize: 24 }}>{s.value}</H>
            <P>{s.label}</P>
          </Stat>
        ))}
      </Grid>
    </Wrap>
  )
}
