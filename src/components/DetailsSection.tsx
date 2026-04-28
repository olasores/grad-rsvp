const details = [
  {
    icon: "📅",
    title: "Date",
    line1: "May 19",
    line2: "Graduation ceremony",
    accent: "#FFACC7",
  },
  {
    icon: "🕐",
    title: "Time",
    line1: "5PM start",
    line2: "Celebration till late",
    accent: "#A8D8EA",
  },
  {
    icon: "📍",
    title: "Venue",
    line1: "Venue details",
    line2: "To be announced",
    accent: "#FFEAA7",
  },
  {
    icon: "👗",
    title: "Dress Code",
    line1: "Graduation-ready",
    line2: "Formal or semi-formal attire",
    accent: "#FFACC7",
  },
];

export default function DetailsSection() {
  return (
    <section className="details-section">
      <div className="section-header">
        <div
          className="divider-line"
          style={{
            background:
              "linear-gradient(90deg, var(--baby-pink), var(--baby-blue), var(--baby-yellow))",
          }}
        />
        <h2 className="section-title">Ceremony Details</h2>
        <p className="section-subtitle">Everything you need to know</p>
      </div>

      <div className="details-grid">
        {details.map((item, i) => (
          <div key={i} className="detail-card">
            <div
              className="detail-icon"
              style={{ background: `${item.accent}33` }}
            >
              {item.icon}
            </div>
            <h3 className="detail-label">{item.title}</h3>
            <p className="detail-primary">{item.line1}</p>
            <p className="detail-secondary">{item.line2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
