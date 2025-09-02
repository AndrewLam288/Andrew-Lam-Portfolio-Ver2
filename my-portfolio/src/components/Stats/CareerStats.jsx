import { Wrap, Grid, Stat, H, P } from './CareerStats.styles'

export default function CareerStats() {
  const stats = [
    { value: '1', label: 'years' },
    { value: '0', label: 'Certificates' },
    { value: '5', label: 'Projects' },
    { value: '0', label: 'Techs' },
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
