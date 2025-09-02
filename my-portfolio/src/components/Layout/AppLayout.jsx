import { Shell, LeftCol, MainCol, RightCol } from "./AppLayout.styles";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import SkillSet from "../SkillSet/SkillSet";
import Expertise from "../Expertise/Expertise";
import Contact from "../Contact/Contact";
import CareerStats from "../Stats/CareerStats";

export default function AppLayout({ mode, onToggleTheme }) {
  return (
    <Shell>
      <LeftCol>
        <Sidebar mode={mode} onToggle={onToggleTheme} />
      </LeftCol>

      <MainCol>
        <Hero />
        <CareerStats />
        <Featured />
      </MainCol>

      <RightCol>
        <SkillSet />
        <Expertise />
        <Contact />
      </RightCol>
    </Shell>
  );
}
