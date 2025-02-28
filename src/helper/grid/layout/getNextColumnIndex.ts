import type { ColumnTopVws } from ".";

export const getNextColumnIndex = (
  columnTopVws: ColumnTopVws
): number => {
  const minTopPosition = Math.min(...columnTopVws);

  return columnTopVws.indexOf(minTopPosition);
};
