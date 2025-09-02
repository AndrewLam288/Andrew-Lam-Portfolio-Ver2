import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6'
import { Wrap, Row, IconBtn } from './Contact.styles'

export default function Contact() {
  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Get in touch</h3>
      <Row>
        <IconBtn href="https://github.com/yourname" target="_blank" rel="noreferrer"><FaGithub /></IconBtn>
        <IconBtn href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer"><FaLinkedin /></IconBtn>
        <IconBtn href="mailto:you@example.com"><FaEnvelope /></IconBtn>
        <IconBtn href="https://twitter.com/yourname" target="_blank" rel="noreferrer"><FaXTwitter /></IconBtn>
      </Row>
      <p style={{ color: 'var(--subtext)' }}>
        Let’s build something great together — feel free to connect.
      </p>
    </Wrap>
  )
}
