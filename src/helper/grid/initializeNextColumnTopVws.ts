import { SPACING_TOP_VW } from ".";
import type { NextColumnTopVws } from ".";

export const initializeNextColumnTopVws = (
  columnCount: number
): NextColumnTopVws => Array(columnCount).fill(SPACING_TOP_VW);
