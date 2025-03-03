import { type IPhoto } from "~/api/pexels";

import {
  SPACING_BETWEEN_VW,
  SPACING_SIDES_VW,
  type ColumnTopVws,
} from "../layout";
import { type IBreakpoint } from ".";
import { addPhotoToBreakpoint } from "./addPhotoToBreakpoint";

export const fillBreakpoint = (
  columnTopVws: ColumnTopVws,
  photos: readonly IPhoto[],
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
