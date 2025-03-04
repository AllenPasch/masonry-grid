import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from "./constant";
import { getWidthVw } from "./getWidthVw";

export const getPositionLeftVw = (
  columnCount: number,
  columnIndex: number,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): number => {
  const spacingLeftVw = spacingSidesVw + columnIndex * spacingBetweenVw;

  const photoWidthVw = getWidthVw(
    columnCount,
    spacingSidesVw,
    spacingBetweenVw
  );
  return spacingLeftVw + columnIndex * photoWidthVw;
};
