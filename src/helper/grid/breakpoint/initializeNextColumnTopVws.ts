import { SPACING_TOP_VW } from "../layout";
import type { NextColumnTopVws } from "../layout";

export const initializeNextColumnTopVws = (
  columnCount: number
): NextColumnTopVws => Array(columnCount).fill(SPACING_TOP_VW);
