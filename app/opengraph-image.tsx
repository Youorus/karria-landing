import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Karria — Plateforme IA pour votre carrière";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.25) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Grid pattern dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            Karria
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.25,
            zIndex: 1,
            marginBottom: "24px",
          }}
        >
          Plateforme IA pour réinventer
          <br />
          votre carrière
        </div>

        {/* Sub-label */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(147,197,253,0.9)",
            textAlign: "center",
            zIndex: 1,
            fontWeight: 500,
          }}
        >
          Matching · CV IA · Lettres · Coaching
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "999px",
            padding: "10px 24px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", fontWeight: 600 }}>
            karria.fr — Disponible en France
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
