import findLastIndex from "lodash/findLastIndex";

import { BREAKPOINTS_PX } from ".";

export const getBreakpointIndex = (htmlClientWidth: number): number =>
  findLastIndex(
    BREAKPOINTS_PX,
    (breakpointPx) => htmlClientWidth >= breakpointPx
  );
