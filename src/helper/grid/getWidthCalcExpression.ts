import { SPACING_BETWEEN_PX, SPACING_SIDES_PX } from ".";

export const getWidthCalcExpression = (
  columnCount: number,
  spacingSidesPx: number = SPACING_SIDES_PX,
  spacingBetweenPx: number = SPACING_BETWEEN_PX
): string => {
  const totalSpacingPx =
    2 * spacingSidesPx + (columnCount - 1) * spacingBetweenPx;
  const availableWidth = `(100vw - ${totalSpacingPx}px)`;

  return columnCount > 1
    ? `${availableWidth} / ${columnCount}`
    : availableWidth;
};
