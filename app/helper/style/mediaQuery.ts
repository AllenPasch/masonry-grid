export const mediaQuery = (breakpointPx: number, css: string): string =>
  breakpointPx
    ? [`@media (min-width: ${breakpointPx}px) {`, css, "}"].join("\n")
    : css;
