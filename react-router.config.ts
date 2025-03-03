import type { Config } from "@react-router/dev/config";

export default {
  future: {
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: true,
  },
  // URLs to prerender HTML for at build time.
  prerender: ["/"],
  ssr: false,
} satisfies Config;
