import { css, Global } from "@emotion/react";

import { App } from "./App";

export const AppStyled = () => (
  <>
    <Global
      styles={css`
        :root {
          --background: #ffffff;
          --foreground: #171717;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --background: #0a0a0a;
            --foreground: #ededed;
          }
        }

        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }

        body {
          color: var(--foreground);
          background: var(--background);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        @media (prefers-color-scheme: dark) {
          html {
            color-scheme: dark;
          }
        }
      `}
    />
    <App />
  </>
);
