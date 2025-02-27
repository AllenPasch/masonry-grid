import { getWidthCalcExpression, SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getLeftPositionCalcExpression = (
  columnCount: number,
  columnIndex: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): string => {
  const spacingLeftVw = spacingSidesVw + columnIndex * spacingBetweenVw;
  const spacingLeftCss = `${spacingLeftVw}vw`;

  if (!columnIndex) {
    return spacingLeftCss;
  }

  const imageWidth = getWidthCalcExpression(columnCount, spacingSidesVw, spacingBetweenVw);
  return `${spacingLeftCss} + ${columnIndex} * ${imageWidth}`;
};
