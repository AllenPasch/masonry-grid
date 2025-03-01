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
   * Styled-components for styling.
   */
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
