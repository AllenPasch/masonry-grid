import { type IHtmlClientDimensions } from "~/helper/screen";

import { getBreakpointIndex } from "..";
import { type IPage } from ".";

/**
 * Get the minimum `window.scrollY` when the next page should be loaded.
 */
export const getScrollYMidpoint = (
  { breakpoints }: IPage,
  { htmlClientWidth, htmlClientHeight }: IHtmlClientDimensions
): number => {
  const breakpointIndex = getBreakpointIndex(htmlClientWidth);
  const { columnTopVws, nextColumnTopVws } = breakpoints[breakpointIndex];

  const midpointVw =
    (Math.min(...columnTopVws) + Math.min(...nextColumnTopVws)) / 2;
  const midpointPx = (midpointVw / 100) * htmlClientWidth;

  return Math.floor(midpointPx - htmlClientHeight);
};
