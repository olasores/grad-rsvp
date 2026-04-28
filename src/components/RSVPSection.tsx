"use client";

import { useState } from "react";

function ConfettiPiece({ index }: { index: number }) {
  const colors = ["#A8D8EA", "#FFACC7", "#FFEAA7", "#C5A3FF", "#A8EAC8"];
  const left = `${Math.random() * 100}%`;
  const top = `${-10 - Math.random() * 20}%`;
  const w = `${6 + Math.random() * 8}px`;
  const radius = Math.random() > 0.5 ? "50%" : "2px";
  const rotate = `rotate(${Math.random() * 360}deg)`;
  const dur = 2 + Math.random() * 3;
  const delay = Math.random() * 0.5;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: w,
        height: w,
        background: colors[index % colors.length],
        borderRadius: radius,
        transform: rotate,
        animation: `confettiFall ${dur}s ease-in ${delay}s forwards`,
        opacity: 0.9,
        pointerEvents: "none",
      }}
    />
  );
}

interface FormState {
  name: string;
  email: string;
  guests: string;
  attending: boolean | null;
  dietaryRestrictions: string;
  message: string;
}

export default function RSVPSection() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    guests: "1",
    attending: null,
    dietaryRestrictions: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!form.name || !form.email || form.attending === null) return;
    if (!formspreeEndpoint) {
      setSubmitError(
        "Missing Formspree endpoint. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to your environment."
      );
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Oyinkansola Olayinka Graduation Ceremony RSVP",
          _replyto: form.email,
          name: form.name,
          email: form.email,
          guests: form.guests,
          attending: form.attending ? "Yes" : "No",
          dietaryRestrictions: form.dietaryRestrictions,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(
          payload?.error || "Unable to send RSVP right now. Please try again."
        );
      }

      setSubmitted(true);

      if (form.attending) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 4000);
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send RSVP right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setForm({
      name: "",
      email: "",
      guests: "1",
      attending: null,
      dietaryRestrictions: "",
      message: "",
    });
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="section-header">
        <div
          className="divider-line"
          style={{
            background:
              "linear-gradient(90deg, var(--baby-yellow), var(--baby-pink), var(--baby-blue))",
          }}
        />
        <h2 className="section-title">
          {submitted ? "Thank You!" : "RSVP for the Ceremony"}
        </h2>
        {!submitted && (
          <p className="section-subtitle">
            Please let us know if you&apos;ll be joining Oyinkansola Olayinka&apos;s
            celebration.
          </p>
        )}
      </div>

      {/* Confetti */}
      {confetti && (
        <div className="confetti-layer">
          {Array.from({ length: 60 }).map((_, i) => (
            <ConfettiPiece key={i} index={i} />
          ))}
        </div>
      )}

      {submitted ? (
        <div className="card success-card">
          <div className="success-emoji">
            {form.attending ? "🎓" : "💌"}
          </div>
          <h3 className="success-title">
            {form.attending
              ? "We can't wait to celebrate with you!"
              : "We'll miss you on the day!"}
          </h3>
          <p className="success-message">
            {form.attending
              ? `Thank you, ${form.name}! Your RSVP for ${form.guests} guest${form.guests !== "1" ? "s" : ""} has been received. We look forward to celebrating Oyinkansola Olayinka with you.`
              : `Thank you for letting us know, ${form.name}. We'll be thinking of you as we celebrate Oyinkansola Olayinka's big day.`}
          </p>
          <button
            className="rsvp-btn"
            onClick={reset}
            style={{ fontSize: 14, padding: "14px 32px" }}
          >
            Submit Another RSVP
          </button>
        </div>
      ) : (
        <div className="card">
          <div className="form-group">
            {/* Name */}
            <div>
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
              />
            </div>

            {/* Attending */}
            <div>
              <label className="form-label">Will you be attending?</label>
              <div className="attending-row">
                <button
                  type="button"
                  className={`attending-btn ${form.attending === true ? "selected-yes" : ""}`}
                  onClick={() =>
                    setForm((s) => ({ ...s, attending: true }))
                  }
                >
                  🎉 Joyfully Accept
                </button>
                <button
                  type="button"
                  className={`attending-btn ${form.attending === false ? "selected-no" : ""}`}
                  onClick={() =>
                    setForm((s) => ({ ...s, attending: false }))
                  }
                >
                  😢 Regretfully Decline
                </button>
              </div>
            </div>

            {/* Guest count */}
            {form.attending === true && (
              <div className="slide-in">
                <label className="form-label">Number of Guests</label>
                <select
                  className="form-input guest-select"
                  value={form.guests}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, guests: e.target.value }))
                  }
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Food allergies / restrictions */}
            <div>
              <label className="form-label">
                Food Allergies or Restrictions (optional)
              </label>
              <textarea
                className="form-input"
                placeholder="Let us know about any allergies, dietary restrictions, or food preferences..."
                value={form.dietaryRestrictions}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    dietaryRestrictions: e.target.value,
                  }))
                }
                rows={3}
                style={{ resize: "vertical", minHeight: 80 }}
              />
            </div>

            {/* Message */}
            <div>
              <label className="form-label">
                Leave a Message (optional)
              </label>
              <textarea
                className="form-input"
                placeholder="Share a message for Oyinkansola..."
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                rows={3}
                style={{ resize: "vertical", minHeight: 80 }}
              />
            </div>

            {/* Submit */}
            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={
                submitting || !form.name || !form.email || form.attending === null
              }
            >
              {submitting ? "Sending..." : "Send RSVP"}
            </button>

            {submitError && <p className="submit-error">{submitError}</p>}
          </div>
        </div>
      )}
    </section>
  );
}
