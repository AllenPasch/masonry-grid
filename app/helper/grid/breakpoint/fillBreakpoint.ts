import type { Photo } from "~/api/pexels";

import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from "../layout";
import type { ColumnTopVws } from "../layout";
import { addPhotoToBreakpoint } from ".";
import type { IBreakpoint } from ".";

export const fillBreakpoint = (
  columnTopVws: ColumnTopVws,
  photos: readonly Photo[],
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IBreakpoint => {
  let nextColumnTopVws = columnTopVws;

  const photoPositions = photos.map((photo) => {
    const result = addPhotoToBreakpoint(
      nextColumnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    nextColumnTopVws = result.nextColumnTopVws;
    return result.position;
  });

  return {
    photoPositions,
    columnTopVws,
    nextColumnTopVws,
  };
};
