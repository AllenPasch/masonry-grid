import { getBreakpointIndex } from ".";

export const getColumnCount = (htmlClientWidth: number): number =>
  getBreakpointIndex(htmlClientWidth) + 1;
