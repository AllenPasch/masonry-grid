import type { Photo } from "@/api/pexels";

import { SPACING_BETWEEN_VW, SPACING_SIDES_VW } from "../layout";
import type { IPhotoPosition, NextColumnTopVws } from "../layout";
import { addPhoto } from ".";

export interface IAddPhotosResult {
  readonly photoPositions: readonly IPhotoPosition[];
  readonly nextColumnTopVws: NextColumnTopVws;
}

export const addPhotos = (
  nextColumnTopVws: NextColumnTopVws,
  photos: readonly Photo[],
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IAddPhotosResult => {
  const photoPositions = photos.map((photo) => {
    const result = addPhoto(
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
