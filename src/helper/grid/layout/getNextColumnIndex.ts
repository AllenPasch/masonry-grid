import type { NextColumnTopVws } from ".";

export const getNextColumnIndex = (
  nextColumnTopVws: NextColumnTopVws
): number => {
  const minTopPosition = Math.min(...nextColumnTopVws);

  return nextColumnTopVws.indexOf(minTopPosition);
};
