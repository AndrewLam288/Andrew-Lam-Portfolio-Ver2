import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa6'
import { Wrap, Row, IconBtn } from './Contact.styles'

export default function Contact() {
  return (
    <Wrap>
      <h3 style={{ marginTop: 0 }}>Get in touch</h3>
      <Row>
        <IconBtn href="https://www.facebook.com/Shin301019/" target="_blank" rel="noreferrer">
          <FaFacebook />
        </IconBtn>
        <IconBtn href="https://github.com/AndrewLam288" target="_blank" rel="noreferrer"><FaGithub /></IconBtn>
        <IconBtn href="https://www.linkedin.com/in/andrew288/" target="_blank" rel="noreferrer"><FaLinkedin /></IconBtn>
        <IconBtn href="mailto:lamminhtrunghieu288@gmail.com"><FaEnvelope /></IconBtn>
      </Row>
      <p style={{ color: 'var(--subtext)' }}>
        Let’s build something great together - please feel free to connect with me.
      </p>
    </Wrap>
  )
}
