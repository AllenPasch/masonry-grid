import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getWidthVw = (
  columnCount: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): number => {
  const totalSpacingVw =
    2 * spacingSidesVw + (columnCount - 1) * spacingBetweenVw;
  const availableWidthVw = 100 - totalSpacingVw;

  return availableWidthVw / columnCount;
};
