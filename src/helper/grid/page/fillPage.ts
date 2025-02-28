import type { Photo } from "@/api/pexels";

import { fillBreakpoint, initializeColumnTopVws } from "../breakpoint";
import { MAX_COLUMN_COUNT } from "../layout";
import type { IPage } from ".";

export const fillPage = (
  previousPage: IPage | null,
  photos: readonly Photo[],
  maxColumnCount: number = MAX_COLUMN_COUNT
): IPage => {
  const breakpoints = Array.from(Array(maxColumnCount)).map(
    (_, breakpointIndex) => {
      const columnTopVws =
        previousPage?.breakpoints[breakpointIndex].nextColumnTopVws ||
        initializeColumnTopVws(breakpointIndex + 1);

      return fillBreakpoint(columnTopVws, photos);
    }
  );

  return {
    breakpoints,
  };
};
