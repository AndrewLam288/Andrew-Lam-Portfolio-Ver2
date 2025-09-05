import { useEffect, useState } from 'react';
import { Wrap, Grid, Stat, H, P } from './CareerStats.styles';
import { fetchCareerStats } from '../../services/cms';

export default function CareerStats() {
  const [stats, setStats] = useState([
    { value: '1', label: 'years' },
    { value: '1', label: 'Certificates' },
    { value: '6', label: 'Projects' },
    { value: '18', label: 'Techs' },
  ]);

  useEffect(() => {
    fetchCareerStats()
      .then((s) =>
        setStats([
          { value: String(s.years),        label: 'years' },
          { value: String(s.certificates), label: 'Certificates' },
          { value: String(s.projects),     label: 'Projects' },
          { value: String(s.techs),        label: 'Techs' },
        ])
      )
      .catch(() => {});
  }, []);

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
  );
}
