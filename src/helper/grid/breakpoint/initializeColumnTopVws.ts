import { SPACING_TOP_VW } from "../layout";
import type { ColumnTopVws } from "../layout";

export const initializeColumnTopVws = (
  columnCount: number
): ColumnTopVws => Array(columnCount).fill(SPACING_TOP_VW);
