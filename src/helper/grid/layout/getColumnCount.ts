import { findLastIndex } from "lodash";

import { BREAKPOINTS_PX } from ".";

export const getColumnCount = (htmlClientWidth: number): number =>
  findLastIndex(
    BREAKPOINTS_PX,
    (breakpointPx) => htmlClientWidth >= breakpointPx
  ) + 1;
