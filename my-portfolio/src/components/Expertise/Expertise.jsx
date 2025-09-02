import { useState } from 'react'
import { Wrap, Item, Header, Body } from './Expertise.styles'

const rows = [
  { title: 'Web Development', text: 'React SPA, routing, accessibility, performance.' },
  { title: 'Graphic Design', text: 'Simple assets, banners, thumbnails.' },
  { title: 'Digital Marketing', text: 'SEO basics, analytics, landing pages.' },
  { title: 'UI/UX Design', text: 'Wireframes, prototypes, component systems.' },
]

export default function Expertise() {
  const [open, setOpen] = useState(0)
  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Expertise</h3>
      {rows.map((r, i) => (
        <Item key={r.title}>
          <Header onClick={() => setOpen((o) => (o === i ? -1 : i))}>{r.title}</Header>
          {open === i && <Body>{r.text}</Body>}
        </Item>
      ))}
    </Wrap>
  )
}
