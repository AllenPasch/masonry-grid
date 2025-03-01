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

  /**
   * Emotion CSS for styling.
   */
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
