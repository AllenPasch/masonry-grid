export const getNextColumnIndex = (
  nextColumnTopVws: readonly number[]
): number => {
  const minTopPosition = Math.min(...nextColumnTopVws);

  return nextColumnTopVws.indexOf(minTopPosition);
};
