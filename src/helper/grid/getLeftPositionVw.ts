import { getWidthVw, SPACING_BETWEEN_VW, SPACING_SIDES_VW } from ".";

export const getLeftPositionVw = (
  columnCount: number,
  columnIndex: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): number => {
  const spacingLeftVw = spacingSidesVw + columnIndex * spacingBetweenVw;

  const imageWidthVw = getWidthVw(
    columnCount,
    spacingSidesVw,
    spacingBetweenVw
  );
  return spacingLeftVw + columnIndex * imageWidthVw;
};
