import findLast from "lodash/findLast";

import { type ISearchResults } from "~/helper/search";

import {
  MAX_COLUMN_COUNT,
  SPACING_BETWEEN_VW,
  SPACING_BOTTOM_VW,
  SPACING_TOP_VW,
} from "./constant";

export const getMinGridHeightVws = (
  { pages }: ISearchResults,
  maxColumnCount: number = MAX_COLUMN_COUNT
): readonly number[] => {
  const breakpoints = findLast(pages, Boolean)?.breakpoints;

  return Array.from(Array(maxColumnCount)).map((_, breakpointIndex) => {
    if (!breakpoints) {
      return SPACING_TOP_VW + SPACING_BOTTOM_VW;
    }

    const { nextColumnTopVws } = breakpoints[breakpointIndex];
    const maxNextColumnTopVw = Math.max(...nextColumnTopVws) || 0;
    return maxNextColumnTopVw + SPACING_BOTTOM_VW - SPACING_BETWEEN_VW;
  });
};
