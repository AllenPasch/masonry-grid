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

    minify: "terser",
    terserOptions: {
      // See https://terser.org/docs/options/#compress-options
      compress: {
        arguments: true,
        drop_console: true,
        drop_debugger: true,
        ecma: 2020,
        hoist_funs: true,
        keep_fargs: false,
        passes: 5,
        pure_getters: true,
        toplevel: true,
      },
      // See https://terser.org/docs/options/#mangle-options
      mangle: {
        eval: true,
        toplevel: true,
      },
      // See https://terser.org/docs/options/#format-options
      format: {
        ecma: 2020,
      },
    },

    rollupOptions: {
      // See https://rollupjs.org/configuration-options/#treeshake
      treeshake: "smallest",
    },

    sourcemap: process.env.SOURCE_MAPS === "true",
  },
  plugins,
});
