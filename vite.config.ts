import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import tsconfigPaths from "vite-tsconfig-paths";

const plugins = [reactRouter(), tsconfigPaths()];

if (process.env.ANALYZE_BUNDLES === "true") {
  plugins.push(analyzer());
}

export default defineConfig({
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    sourcemap: process.env.SOURCE_MAPS === "true",
  },
  plugins,
});
