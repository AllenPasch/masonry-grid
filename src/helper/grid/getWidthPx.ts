import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getWidthPx = (
  columnCount: number,
  htmlClientWidth: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): number => {
  const totalSpacingVw =
    2 * spacingSidesVw + (columnCount - 1) * spacingBetweenVw;
  const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

  return availableWidth / columnCount;
};
