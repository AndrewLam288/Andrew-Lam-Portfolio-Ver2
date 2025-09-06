import { useEffect, useState } from "react";            // ⬅ add this
import { FiHome, FiUser, FiAward, FiFolder, FiBook, FiDownload } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import avatarImg from '../../assets/Andrew Lam Avatar.jpg';
import {
  Wrapper, Header, Avatar, Name, Role, ResumeBtn,
  Divider, Nav, LinkItem, Footer, Muted
} from './Sidebar.styles';
import { fetchResumeUrl } from '../../services/cms';

export default function Sidebar({ mode, onToggle }) {
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    let alive = true;
    fetchResumeUrl()
      .then((url) => { if (alive) setResumeUrl(url || null); })
      .catch(() => { if (alive) setResumeUrl(null); });
    return () => { alive = false; };
  }, []);

  return (
    <Wrapper>
      <Header>
        <Avatar src={avatarImg} alt="Andrew Lam" />
        <div>
          <Name>Andrew Lam</Name>
          <Role>Junior Software Engineer</Role>
        </div>
      </Header>

      {/* Resume */}
      <ResumeBtn
        as="a"
        href={resumeUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!resumeUrl}
        onClick={(e) => { if (!resumeUrl) e.preventDefault(); }}
        title={resumeUrl ? 'Open resume' : 'Resume unavailable'}
      >
        <FiDownload /> Resume
      </ResumeBtn>

      <Divider />

      <Nav>
        <LinkItem to="/" end><FiHome /> Home</LinkItem>
        <LinkItem to="/about"><FiUser /> About</LinkItem>
        <LinkItem to="/achievements"><FiAward /> Achievements</LinkItem>
        <LinkItem to="/projects"><FiFolder /> Projects</LinkItem>
        <LinkItem to="/blogs"><FiBook /> Blogs</LinkItem>
      </Nav>

      <Footer>
        <ThemeToggle mode={mode} onToggle={onToggle} />
      </Footer>

      <Muted>
        Designed &amp; Built by Andrew Lam<br />© {new Date().getFullYear()}, All rights reserved.
      </Muted>
    </Wrapper>
  );
}
