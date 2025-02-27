import { getWidthVw, SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getWidthPx = (
  columnCount: number,
  htmlClientWidth: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): number => {
  const widthVw = getWidthVw(columnCount, spacingSidesVw, spacingBetweenVw);

  return (htmlClientWidth * widthVw) / 100;
};
