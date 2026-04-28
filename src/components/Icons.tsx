export function GradCapIcon({
  size = 64,
  color = "#3A3A5C",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <polygon points="32,8 4,24 32,40 60,24" fill={color} opacity="0.9" />
      <polygon points="32,8 4,24 32,40 60,24" fill="url(#capShineG)" />
      <rect x="30" y="24" width="4" height="22" rx="1" fill={color} opacity="0.7" />
      <path d="M34 46 Q38 50 34 54 Q30 50 34 46Z" fill="#FFEAA7" />
      <line x1="34" y1="54" x2="34" y2="60" stroke="#FFEAA7" strokeWidth="1.5" />
      <line x1="34" y1="54" x2="30" y2="58" stroke="#FFEAA7" strokeWidth="1.5" />
      <defs>
        <linearGradient id="capShineG" x1="4" y1="24" x2="60" y2="24">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="50%" stopColor="white" stopOpacity="0.05" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StarBurst({
  x,
  y,
  size = 24,
  color,
}: {
  x: string;
  y: string;
  size?: number;
  color: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: "absolute", left: x, top: y, pointerEvents: "none" }}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}
