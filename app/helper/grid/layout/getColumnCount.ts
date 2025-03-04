import { getBreakpointIndex } from "./getBreakpointIndex";

export const getColumnCount = (htmlClientWidth: number): number =>
  getBreakpointIndex(htmlClientWidth) + 1;
