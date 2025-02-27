export const getNextColumnIndex = (
  nextColumnTopPositions: readonly number[]
): number => {
  const minTopPosition = Math.min(...nextColumnTopPositions);

  return nextColumnTopPositions.indexOf(minTopPosition);
};
