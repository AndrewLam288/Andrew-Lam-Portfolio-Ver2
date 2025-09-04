import { useEffect, useRef, useState } from "react";
import {
  Lightbox, Box, Close, ZoomViewport, ZoomStage, ZoomImg,
  MetaRow, Button, Small,
} from "./Achievements.styles";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export default function CertificateModal({
  src,
  title,
  subtitle,
  onClose,
  downloadName = "certificate.jpg",
}) {
  const viewportRef = useRef(null);

  const onDownload = async () => {
    try {
      const res = await fetch(src, { mode: "cors" });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  // zoom/pan state
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const panRef = useRef({ x: 0, y: 0 });

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // zoom around the mouse position
  const onWheel = (e) => {
    e.preventDefault();
    const next = clamp(scale * (e.deltaY > 0 ? 0.9 : 1.1), 1, 5);

    const vp = viewportRef.current?.getBoundingClientRect();
    if (vp) {
      const mx = e.clientX - vp.left - vp.width / 2;
      const my = e.clientY - vp.top - vp.height / 2;
      setTx((prev) => prev - mx * (next / scale - 1));
      setTy((prev) => prev - my * (next / scale - 1));
    }

    setScale(next);
  };

  // drag to pan
  const onMouseDown = (e) => {
    setIsPanning(true);
    panRef.current = { x: e.clientX - tx, y: e.clientY - ty };
  };
  const onMouseMove = (e) => {
    if (!isPanning) return;
    setTx(e.clientX - panRef.current.x);
    setTy(e.clientY - panRef.current.y);
  };
  const onMouseUp = () => setIsPanning(false);

  const resetView = () => {
    setScale(1);
    setTx(0);
    setTy(0);
  };

  return (
    <Lightbox onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose} aria-label="Close">×</Close>

        <ZoomViewport
          ref={viewportRef}
          onWheelCapture={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onWheel(e);
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onDoubleClick={resetView}
          $isPanning={isPanning}
          $canPan={scale > 1}
        >
          <ZoomStage $tx={tx} $ty={ty} $scale={scale}>
            <ZoomImg src={src} alt={title} />
          </ZoomStage>
        </ZoomViewport>

        <MetaRow>
          <div>
            <strong>{title}</strong>
            {subtitle && <Small style={{ display: "block" }}>{subtitle}</Small>}
          </div>
          <Button onClick={onDownload}>Download</Button>
        </MetaRow>
      </Box>
    </Lightbox>
  );
}
