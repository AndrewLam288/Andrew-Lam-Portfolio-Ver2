import { FiHome, FiUser, FiAward, FiFolder, FiBook, FiDownload } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import avatarImg from '../../assets/Andrew Lam Avatar.jpg';
import {
  Wrapper,
  Header,
  Avatar,
  Name,
  Role,
  ResumeBtn,
  Divider,
  Nav,
  LinkItem,
  Footer,
  Muted
} from './Sidebar.styles';

export default function Sidebar({ mode, onToggle }) {
  return (
    <Wrapper>
      {/* Top identity row */}
      <Header>
        <Avatar src={avatarImg} alt="Andrew Lam" />
        <div>
          <Name>Andrew Lam</Name>
          <Role>Junior Software Engineer</Role>
        </div>
      </Header>

      {/* Resume */}
      <ResumeBtn href="/src/assets/Andrew Lam Resume.pdf" target="_blank" rel="noreferrer">
        <FiDownload /> Resume
      </ResumeBtn>

      <Divider />

      {/* Nav */}
      <Nav>
        <LinkItem to="/" end><FiHome /> Home</LinkItem>
        <LinkItem to="/about"><FiUser /> About</LinkItem>
        <LinkItem to="/achievements"><FiAward /> Achievements</LinkItem>
        <LinkItem to="/projects"><FiFolder /> Projects</LinkItem>
        <LinkItem to="/blogs"><FiBook /> Blogs</LinkItem>
      </Nav>

      {/* Footer: mode + tiny copyright */}
      <Footer>
        <ThemeToggle mode={mode} onToggle={onToggle} />
      </Footer>

      <Muted>
        Designed &amp; Built by Andrew Lam<br/>© {new Date().getFullYear()}, All rights reserved.
      </Muted>
    </Wrapper>
  );
}
