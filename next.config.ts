import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // keep the repo clean — this is a portfolio, not a workspace
  agentRules: false,
};

export default nextConfig;
