// TopProgressBar.jsx
import React, { useEffect, useRef, useState } from "react";
import { LinearProgress, Box } from "@mui/material";

/**
 * Top progress bar that fills from 0% -> 100% as user scrolls page.
 * Drop <TopProgressBar /> near top of your app (e.g. in Layout or _app.js)
 */
export default function TopProgressBar({
  color = "#ff1053",
  height = 4,
  fadeOutAtTop = true, // if true, hides when at very top (0%)
}) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;

    const calc = () => {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop || 0;
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight;
      const clientHeight = window.innerHeight || doc.clientHeight;
      const maxScroll = Math.max(scrollHeight - clientHeight, 1);
      const pct = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
      setProgress(pct);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(calc);
      }
    };

    // initial calc
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: `${height}px`,
        zIndex: 1500,
        pointerEvents: "none",
        // show/hide softly
        transition: "opacity 240ms ease",
        opacity: fadeOutAtTop ? (progress < 0.5 ? 0 : 1) : 1,
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "100%",
          borderRadius: 0,
          backgroundColor: "transparent",
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
            transition: "transform 120ms linear, width 120ms linear",
          },
          "&.MuiLinearProgress-root": {
            backgroundColor: "rgba(255,255,255,0.06)",
          },
        }}
      />
    </Box>
  );
}
