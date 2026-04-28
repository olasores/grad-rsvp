"use client";

import { StarBurst } from "./Icons";

const shapes = [
  { delay: 0, size: 14, color: "#FFACC7", left: 10, duration: 18, shape: "circle" },
  { delay: 3, size: 10, color: "#A8D8EA", left: 25, duration: 22, shape: "diamond" },
  { delay: 6, size: 16, color: "#FFEAA7", left: 45, duration: 20, shape: "circle" },
  { delay: 2, size: 8, color: "#FFACC7", left: 60, duration: 24, shape: "square" },
  { delay: 8, size: 12, color: "#A8D8EA", left: 75, duration: 19, shape: "circle" },
  { delay: 5, size: 10, color: "#FFEAA7", left: 88, duration: 21, shape: "diamond" },
  { delay: 1, size: 14, color: "#FFACC7", left: 35, duration: 23, shape: "circle" },
  { delay: 7, size: 8, color: "#A8D8EA", left: 55, duration: 17, shape: "square" },
];

export default function FloatingDecorations() {
  return (
    <>
      {shapes.map((s, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius:
              s.shape === "circle" ? "50%" : s.shape === "diamond" ? "4px" : "0",
            transform: s.shape === "diamond" ? "rotate(45deg)" : "none",
            animation: `floatDown ${s.duration}s linear ${s.delay}s infinite`,
          }}
        />
      ))}

      <div className="star-wrapper" style={{ animation: "starTwinkle 3s ease-in-out infinite" }}>
        <StarBurst x="8%" y="15%" size={20} color="#FFACC7" />
      </div>
      <div className="star-wrapper" style={{ animation: "starTwinkle 4s ease-in-out 1s infinite" }}>
        <StarBurst x="85%" y="10%" size={28} color="#A8D8EA" />
      </div>
      <div className="star-wrapper" style={{ animation: "starTwinkle 3.5s ease-in-out 0.5s infinite" }}>
        <StarBurst x="90%" y="40%" size={18} color="#FFEAA7" />
      </div>
      <div className="star-wrapper" style={{ animation: "starTwinkle 5s ease-in-out 2s infinite" }}>
        <StarBurst x="5%" y="55%" size={22} color="#A8D8EA" />
      </div>
    </>
  );
}
