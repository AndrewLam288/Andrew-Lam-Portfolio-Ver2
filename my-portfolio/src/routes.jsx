import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const Placeholder = ({ label }) => <div style={{ padding: 24 }}>Coming soon: {label}</div>;

export default function AppRoutes({ mode, onToggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} onToggleTheme={onToggleTheme} />} />
      <Route path="/about" element={<Placeholder label="About" />} />
      <Route path="/achievements" element={<Placeholder label="Achievements" />} />
      <Route path="/projects" element={<Placeholder label="Projects" />} />
      <Route path="/blogs" element={<Placeholder label="Blogs" />} />
    </Routes>
  );
}
