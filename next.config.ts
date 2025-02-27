import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * Static website, for fast loading.
   */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
