"use client";

import { useState, useEffect } from "react";

export default function TVLoadingScreen({
}: {
}) {
  const [phase, setPhase] = useState(0);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 4200),
      setTimeout(() => setPhase(5), 5400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Boot text sequence
  useEffect(() => {
    if (phase !== 3) return;
    const lines = [
      "OYI-OS v2026.06.14",
      "Initializing celebration protocols...",
      "Loading memories ████████████ OK",
      "Cap & gown renderer ......... OK",
      "Confetti engine ............. OK",
      "Achievement unlocked: GRADUATE",
      "",
      "ALL SYSTEMS READY.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setBootLines((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 260);
    return () => clearInterval(interval);
  }, [phase]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`tv-overlay ${phase === 5 ? "exiting" : ""}`}
    >
      {/* Phase 1: White dot */}
      {phase >= 1 && phase < 2 && <div className="tv-dot" />}

      {/* Phase 2: Horizontal line */}
      {phase === 2 && <div className="tv-line" />}

      {/* Phase 3-4: Full screen with boot text / welcome */}
      {phase >= 3 && phase < 5 && (
        <>
          <div
            className="tv-screen"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: phase === 4 ? "center" : "flex-start",
              alignItems: phase === 4 ? "center" : "flex-start",
              padding: phase === 4 ? 0 : 32,
            }}
          >
            <div className="scanlines" />
            <div className="scanline-bar" />
            <div className="vignette" />

            {phase === 3 && (
              <div style={{ position: "relative", zIndex: 5 }}>
                {bootLines.map((line, i) => (
                  <div key={i} className="boot-text">
                    {line}
                  </div>
                ))}
                <span
                  className="boot-text"
                  style={{ opacity: showCursor ? 1 : 0 }}
                >
                  ▌
                </span>
              </div>
            )}

            {phase === 4 && (
              <div style={{ position: "relative", zIndex: 5, textAlign: "center" }}>
                <div className="welcome-text">WELCOME</div>
              </div>
            )}
          </div>
          <div className="tv-bezel" />
        </>
      )}
    </div>
  );
}
