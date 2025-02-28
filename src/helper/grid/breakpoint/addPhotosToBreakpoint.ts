import type { Photo } from "@/api/pexels";

import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from "../layout";
import type { IPhotoPosition, NextColumnTopVws } from "../layout";
import { addPhotoToBreakpoint } from ".";

export interface IAddPhotosToBreakpointResult {
  readonly photoPositions: readonly IPhotoPosition[];
  readonly nextColumnTopVws: NextColumnTopVws;
}

export const addPhotosToBreakpoint = (
  nextColumnTopVws: NextColumnTopVws,
  photos: readonly Photo[],
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IAddPhotosToBreakpointResult => {
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
    nextColumnTopVws,
  };
};
