const CalendarIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="20" rx="4" stroke={color} strokeWidth="2" fill={`${color}22`} />
    <rect x="4" y="8" width="24" height="8" rx="4" fill={color} opacity="0.85" />
    <line x1="10" y1="4" x2="10" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="4" x2="22" y2="10" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <text x="16" y="24.5" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Nunito, sans-serif" fill={color}>19</text>
  </svg>
);

const ClockIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2" fill={`${color}22`} />
    <circle cx="16" cy="16" r="2" fill={color} />
    <line x1="16" y1="16" x2="16" y2="9" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="16" x2="22" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {[0, 90, 180, 270].map((deg) => (
      <circle
        key={deg}
        cx={16 + 10 * Math.cos((deg - 90) * Math.PI / 180)}
        cy={16 + 10 * Math.sin((deg - 90) * Math.PI / 180)}
        r="1.2"
        fill={color}
        opacity="0.5"
      />
    ))}
  </svg>
);

const MapPinIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 3C10.48 3 6 7.48 6 13C6 20.25 16 29 16 29C16 29 26 20.25 26 13C26 7.48 21.52 3 16 3Z"
      stroke={color}
      strokeWidth="2"
      fill={`${color}22`}
    />
    <circle cx="16" cy="13" r="4" stroke={color} strokeWidth="2" fill={color} opacity="0.6" />
    <circle cx="16" cy="13" r="1.5" fill="white" opacity="0.8" />
  </svg>
);

const SparkleIcon = ({ color }: { color: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 3L18.5 12.5L28 16L18.5 19.5L16 29L13.5 19.5L4 16L13.5 12.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill={`${color}44`}
    />
    <path
      d="M16 8L17.5 13.5L23 16L17.5 18.5L16 24L14.5 18.5L9 16L14.5 13.5Z"
      fill={color}
      opacity="0.7"
    />
    <circle cx="25" cy="7" r="1.5" fill={color} opacity="0.5" />
    <circle cx="7" cy="8" r="1" fill={color} opacity="0.4" />
    <circle cx="26" cy="25" r="1" fill={color} opacity="0.35" />
  </svg>
);

const icons: Record<string, React.FC<{ color: string }>> = {
  calendar: CalendarIcon,
  clock: ClockIcon,
  mapPin: MapPinIcon,
  sparkle: SparkleIcon,
};

const details = [
  {
    icon: "calendar",
    title: "Date",
    line1: "May 19",
    line2: "Graduation ceremony",
    accent: "#FFACC7",
  },
  {
    icon: "clock",
    title: "Time",
    line1: "5PM until closing time",
    line2: "Celebration till late",
    accent: "#A8D8EA",
  },
  {
    icon: "mapPin",
    title: "Venue",
    line1: "Venue details",
    line2: "To be announced",
    accent: "#FFEAA7",
  },
  {
    icon: "sparkle",
    title: "Dress Code",
    line1: "No restrictions",
    line2: "No dress code — all welcome",
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
        {details.map((item, i) => {
          const IconComponent = icons[item.icon];
          return (
            <div key={i} className="detail-card">
              <div
                className="detail-icon"
                style={{ background: `${item.accent}22` }}
              >
                <IconComponent color={item.accent} />
              </div>
              <h3 className="detail-label">{item.title}</h3>
              <p className="detail-primary">{item.line1}</p>
              <p className="detail-secondary">{item.line2}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}