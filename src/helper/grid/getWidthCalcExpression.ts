import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getWidthCalcExpression = (
  columnCount: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): string => {
  const totalSpacingVw =
    2 * spacingSidesVw + (columnCount - 1) * spacingBetweenVw;
  const availableWidth = `(100vw - ${totalSpacingVw}vw)`;

  return columnCount > 1
    ? `${availableWidth} / ${columnCount}`
    : availableWidth;
};
