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
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,

        // Causes back button from Photo Details to show a white screen:
        // booleans_as_integers: true,
      },
      // See https://terser.org/docs/options/#mangle-options
      mangle: {
        eval: true,
        toplevel: true,
      },
    },

    sourcemap: process.env.SOURCE_MAPS === "true",
  },
  plugins,
});
