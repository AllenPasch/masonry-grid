import { SPACING_BETWEEN_PX, SPACING_SIDES_PX } from ".";

export const getWidthPx = (
  columnCount: number,
  htmlClientWidth: number,
  spacingSidesPx: number = SPACING_SIDES_PX,
  spacingBetweenPx: number = SPACING_BETWEEN_PX
): number => {
  const totalSpacingPx =
    2 * spacingSidesPx + (columnCount - 1) * spacingBetweenPx;
  const availableWidth = htmlClientWidth - totalSpacingPx;

  return availableWidth / columnCount;
};
