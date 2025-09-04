import { useState, useEffect, useRef } from "react";
import {
  Title, Grid, Tile, Small, Button,
  Lightbox, Box, Close, MetaRow,
  ZoomViewport, ZoomStage, ZoomImg
} from "./Achievements.styles";

import ieltsCert from "../../assets/certificates/ielts-british-council-certificate.jpg";
// import more certificates as needed here

const achievements = [
  {
    title: "British Council IELTS",
    issuer: "British Council",
    date: "March 2022",
    img: ieltsCert,
  },
  // { title: "React (Basic)", issuer: "HackerRank", date: "June 2025", img: reactBasic },
];

// Zoomable certificate image: wheel to zoom, drag to pan, dbl-click to reset
function ZoomCert({ src, alt, hiResSrc }) {
  const imgRef = useRef(null);
  const viewportRef = useRef(null);

  const MIN = 1;
  const MAX = 5;
  const STEP = 0.2;

  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [panning, setPanning] = useState(false);
  const [maxScale, setMaxScale] = useState(MAX);
  const panStart = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  // Reset when source changes (open another cert)
  useEffect(() => {
    setScale(1);
    setTx(0);
    setTy(0);
    setMaxScale(MAX);
  }, [src]);

  const onImgLoad = () => {
    const el = imgRef.current;
    if (!el) return;
    const displayedH = el.clientHeight || el.offsetHeight || 1;
    const naturalH = el.naturalHeight || displayedH;
    const limit = Math.max(1, Math.min(MAX, naturalH / displayedH));
    setMaxScale(limit);
  };

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  const onWheel = (e) => {
    e.preventDefault();

    const dir = e.deltaY < 0 ? 1 : -1;
    const next = clamp(scale + dir * STEP, MIN, maxScale);
    setScale(next);

    // If we zoomed back to 1, snap position
    if (next === 1) {
      setTx(0);
      setTy(0);
    }
  };

  const onMouseDown = (e) => {
    if (scale === 1) return;
    setPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, tx, ty };
  };

  const onMouseMove = (e) => {
    if (!panning) return;
    const dx = e.clientX - panStart.current.x;
    const dy = e.clientY - panStart.current.y;
    setTx(panStart.current.tx + dx);
    setTy(panStart.current.ty + dy);
  };

  const endPan = () => setPanning(false);

  const onDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      setScale(1);
      setTx(0);
      setTy(0);
    }
  };

  return (
    <ZoomViewport
      ref={viewportRef}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={endPan}
      onMouseLeave={endPan}
      onDoubleClick={onDoubleClick}
      $isPanning={panning}
    >
      <ZoomStage $scale={scale} $tx={tx} $ty={ty}>
        <ZoomImg
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={onImgLoad}
          srcSet={hiResSrc ? `${src} 1200w, ${hiResSrc} 2400w` : undefined}
          sizes="(max-width: 980px) 90vw, 980px"
        />
      </ZoomStage>
    </ZoomViewport>
  );
}

export default function Achievements() {
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenIdx(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Title>Licenses & Certifications</Title>

      <Grid>
        {achievements.map((a, i) => (
          <Tile key={a.title}>
            <strong>{a.title}</strong>
            <Small>{a.issuer} • Issued {a.date}</Small>
            <Button onClick={() => setOpenIdx(i)}>Show Credential</Button>
          </Tile>
        ))}
      </Grid>

      {openIdx !== null && (
        <Lightbox onClick={() => setOpenIdx(null)} role="dialog" aria-modal="true">
          <Box onClick={(e) => e.stopPropagation()}>
            <Close type="button" aria-label="Close" onClick={() => setOpenIdx(null)}>×</Close>

            <ZoomCert
              src={achievements[openIdx].img}
              alt={`${achievements[openIdx].title} certificate`}
            />

            <MetaRow>
              <div>
                <strong>{achievements[openIdx].title}</strong>
                <Small style={{ display: "block", marginTop: 4 }}>
                  {achievements[openIdx].issuer} • Issued {achievements[openIdx].date}
                </Small>
              </div>
              <Button as="a" href={achievements[openIdx].img} download>
                Download
              </Button>
            </MetaRow>
          </Box>
        </Lightbox>
      )}
    </>
  );
}
