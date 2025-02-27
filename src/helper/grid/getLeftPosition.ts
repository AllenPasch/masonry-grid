import { getWidth, SPACING_BETWEEN_PX, SPACING_SIDES_PX } from ".";

export const getLeftPosition = (
  columnCount: number,
  columnIndex: number,
  spacingSidesPx: number = SPACING_SIDES_PX,
  spacingBetweenPx: number = SPACING_BETWEEN_PX
): string => {
  const spacingLeftPx = spacingSidesPx + columnIndex * spacingBetweenPx;
  const spacingLeftPxCss = `${spacingLeftPx}px`;

  if (!columnIndex) {
    return spacingLeftPxCss;
  }

  const imageWidth = getWidth(columnCount, spacingSidesPx, spacingBetweenPx);
  return `${spacingLeftPxCss} + ${columnIndex} * ${imageWidth}`;
};
