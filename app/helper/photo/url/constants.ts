import { BREAKPOINTS_PX, getWidthVw } from "~/helper/grid";

import { type IPhotoSizeSpecific } from "../size";

export const STATIC_HTML_SIZES = BREAKPOINTS_PX.map(
  (breakpointPx, breakpointIndex) => {
    const columnCount = breakpointIndex + 1;
    const photoWidthVw = getWidthVw(columnCount);

    let size = `${photoWidthVw}vw`;
    if (breakpointPx) {
      size = `(min-width: ${breakpointPx}px) ${size}`;
    }

    return size;
  }
)
  .reverse()
  .join(", ");

export const STATIC_HTML_WIDTHS = [
  144, // Photo width on a 320px wide screen, with 1 dpi.
  160,
  176,
  192,
  208,
  216,
];

export const STATIC_HTML_DEFAULT_SIZE: IPhotoSizeSpecific = {
  widthPx: STATIC_HTML_WIDTHS[STATIC_HTML_WIDTHS.length - 1],
  devicePixelRatio: 1,
};
