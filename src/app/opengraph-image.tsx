import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — AI Engineer & ML Researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d10",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#22d3ee" }} />
          <div style={{ color: "#9c9ca8", fontSize: 22, letterSpacing: 4 }}>
            {profile.roles.join("  ·  ").toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ececed", fontSize: 116, fontWeight: 700, lineHeight: 1, letterSpacing: -4 }}>
            Azmal Awasaf
          </div>
          <div style={{ color: "#9c9ca8", fontSize: 30, marginTop: 26, maxWidth: 900, lineHeight: 1.4 }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#22d3ee", fontSize: 24 }}>azmal16.github.io</div>
          <div style={{ color: "#6b6b78", fontSize: 24 }}>Edmonton, Alberta</div>
        </div>
      </div>
    ),
    size,
  );
}
