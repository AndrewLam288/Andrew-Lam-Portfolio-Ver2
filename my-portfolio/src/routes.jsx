import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Achievements from "./pages/Achievements/Achievements";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";

export default function AppRoutes({ mode, onToggleTheme }) {
  return (
    <Routes>
      <Route element={<AppLayout mode={mode} onToggleTheme={onToggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}
