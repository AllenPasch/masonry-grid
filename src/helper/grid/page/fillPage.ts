import type { Photos } from "@/api/pexels";

import { fillBreakpoint, initializeColumnTopVws } from "../breakpoint";
import { MAX_COLUMN_COUNT } from "../layout";
import type { IPage } from ".";

export const fillPage = (
  previousPage: IPage | null | undefined,
  { photos, next_page }: Photos,
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

  const photoBreakpoints = breakpoints[0].photoPositions.map(
    ({ photo }, photoIndex) => ({
      photo,
      breakpoints: breakpoints.map(
        ({ photoPositions }) => photoPositions[photoIndex]
      ),
    })
  );

  const morePages = !!next_page;

  return {
    breakpoints,
    photos: photoBreakpoints,
    morePages,
  };
};
