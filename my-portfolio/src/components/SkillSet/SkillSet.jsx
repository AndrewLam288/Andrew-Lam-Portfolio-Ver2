import { Wrap, Chips, Chip } from './SkillSet.styles'

export default function SkillSet() {
  const skills = ['JS', 'TS', 'Java', 'PHP', 'MySQL', 'Node', 'React', 'CSS', 'Tailwind']
  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Skill Set</h3>
      <Chips>{skills.map((s) => <Chip key={s}>{s}</Chip>)}</Chips>
    </Wrap>
  )
}
