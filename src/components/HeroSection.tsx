"use client";

import { GradCapIcon } from "./Icons";

export default function HeroSection() {
  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-cap">
        <GradCapIcon size={80} />
      </div>

      <p className="hero-eyebrow">You&apos;re Invited To Celebrate</p>

      <h1 className="hero-title">
        Oyinkansola
        <br />
        <span className="accent">Olayinka</span>
      </h1>

      <div className="hero-subtitle">Graduation Ceremony</div>

      <p className="hero-event-info">
        May 19 • 5PM until closing time • Celebration till late
      </p>

      <p className="hero-description">
        Join us in celebrating Oyinkansola Olayinka&apos;s graduation ceremony,
        a proud milestone filled with gratitude, joy, and the promise of what
        comes next.
      </p>

      <button className="rsvp-btn" onClick={scrollToRSVP}>
        RSVP Now <span style={{ fontSize: 22 }}>→</span>
      </button>

      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4L12 20M12 20L6 14M12 20L18 14"
            stroke="#7B7B9D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
