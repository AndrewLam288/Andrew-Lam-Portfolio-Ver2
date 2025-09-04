import { useEffect, useState } from "react";
import {
  Title, Grid, Tile, Small, Button, SectionCard
} from "./Achievements.styles";
import { fetchCertificates } from "../../services/cms";
import CertificateModal from "./CertificateModal"; 

export default function Achievements() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetchCertificates()
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <>
      <SectionCard>
        <Title>Licenses &amp; Certifications</Title>
        <Grid>
          {items.map(a => (
            <Tile key={a.id || a.title}>
              <strong>{a.title}</strong>
              <Small>{a.issuer} • Issued {a.date}</Small>
              {a.imgUrl && (
                <Button onClick={() => setActive(a)}>Show Credential</Button>
              )}
            </Tile>
          ))}
        </Grid>
      </SectionCard>

      {active && CertificateModal && (
        <CertificateModal
          src={active.imgUrl}
          title={active.title}
          subtitle={`${active.issuer} • Issued ${active.date}`}
          onClose={() => setActive(null)}
          downloadName={`${active.title}.jpg`}
        />
      )}
    </>
  );
}
