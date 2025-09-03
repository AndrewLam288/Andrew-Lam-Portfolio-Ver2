import { Outlet, useLocation } from "react-router-dom";
import { Shell, LeftCol, MainCol, RightCol } from "./AppLayout.styles";
import Sidebar from "../Sidebar/Sidebar";
import SkillSet from "../SkillSet/SkillSet";
import Expertise from "../Expertise/Expertise";
import Contact from "../Contact/Contact";

// Home-only center content
import Hero from "../Hero/Hero";
import CareerStats from "../Stats/CareerStats";
import Featured from "../Featured/Featured";

export default function AppLayout({ mode, onToggleTheme }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <Shell>
      <LeftCol>
        <Sidebar mode={mode} onToggle={onToggleTheme} />
      </LeftCol>

      <MainCol>
        {isHome && (
          <>
            <Hero />
            <CareerStats />
            <Featured />
          </>
        )}
        <Outlet />
      </MainCol>

      <RightCol>
        <SkillSet />
        <Expertise />
        <Contact />
      </RightCol>
    </Shell>
  );
}
