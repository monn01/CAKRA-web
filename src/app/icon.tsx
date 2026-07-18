import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1712",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13.5" stroke="#f6f1e7" strokeWidth="1.8" />
          <circle cx="16" cy="16" r="2.6" fill="#c1440e" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const x1 = 16 + Math.cos(angle) * 4.2;
            const y1 = 16 + Math.sin(angle) * 4.2;
            const x2 = 16 + Math.cos(angle) * 12.4;
            const y2 = 16 + Math.sin(angle) * 12.4;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#f6f1e7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
    ),
    { ...size }
  );
}
