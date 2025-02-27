import { getWidthCalcExpression, SPACING_BETWEEN_PX, SPACING_SIDES_PX } from ".";

export const getLeftPositionCalcExpression = (
  columnCount: number,
  columnIndex: number,
  spacingSidesPx: number = SPACING_SIDES_PX,
  spacingBetweenPx: number = SPACING_BETWEEN_PX
): string => {
  const spacingLeftPx = spacingSidesPx + columnIndex * spacingBetweenPx;
  const spacingLeftCss = `${spacingLeftPx}px`;

  if (!columnIndex) {
    return spacingLeftCss;
  }

  const imageWidth = getWidthCalcExpression(columnCount, spacingSidesPx, spacingBetweenPx);
  return `${spacingLeftCss} + ${columnIndex} * ${imageWidth}`;
};
