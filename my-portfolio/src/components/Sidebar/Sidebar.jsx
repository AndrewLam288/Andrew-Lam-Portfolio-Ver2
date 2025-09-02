import { NavLink } from 'react-router-dom'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { Wrapper, Avatar, Name, Role, ResumeBtn, Nav, NavLinkItem } from './Sidebar.styles'

export default function Sidebar({ mode, onToggle }) {
  return (
    <Wrapper>
      <Avatar />
      <Name>Your Name</Name>
      <Role>Front-End Developer</Role>

      <ResumeBtn href="/src/assets/resume.pdf" target="_blank" rel="noreferrer">
        Resume
      </ResumeBtn>

      <Nav>
        <NavLink to="/"><NavLinkItem>Home</NavLinkItem></NavLink>
        <NavLink to="/about"><NavLinkItem>About</NavLinkItem></NavLink>
        <NavLink to="/achievements"><NavLinkItem>Achievements</NavLinkItem></NavLink>
        <NavLink to="/projects"><NavLinkItem>Projects</NavLinkItem></NavLink>
        <NavLink to="/blogs"><NavLinkItem>Blogs</NavLinkItem></NavLink>
      </Nav>

      <div style={{ marginTop: 16 }}>
        <ThemeToggle mode={mode} onToggle={onToggle} />
      </div>
    </Wrapper>
  )
}
