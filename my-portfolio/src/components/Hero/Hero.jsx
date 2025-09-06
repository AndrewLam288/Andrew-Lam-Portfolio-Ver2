import { useEffect, useMemo, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { HeroCard, Banner, TopBar, DatePill, TextOverlay, Greeting } from "./Hero.styles.js";
import { fetchHeroBanner } from "../../services/cms";

export default function Hero() {
  const [bg, setBg] = useState(null);

  useEffect(() => {
    fetchHeroBanner().then(setBg).catch(() => setBg(null));
  }, []);

  // Update time every minute so the badge stays fresh
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const dateText = useMemo(
    () => now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    [now]
  );

  const partOfDay = useMemo(() => {
    const h = now.getHours();
    if (h < 12) return "morning";
    if (h < 18) return "afternoon";
    return "evening";
  }, [now]);

  return (
    <HeroCard aria-label="Hero banner">
      <Banner style={bg ? { backgroundImage: `url(${bg})` } : undefined} />

      <TopBar>
        <DatePill><FiCalendar /> {dateText}</DatePill>
      </TopBar>

      <TextOverlay>
        <Greeting>{`Good ${partOfDay}! Hope you have had a great day!`}</Greeting>
      </TextOverlay>
    </HeroCard>
  );
}
