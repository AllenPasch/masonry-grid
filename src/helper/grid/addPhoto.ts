import type { Photo } from "@/api/pexels";

import {
  getHeight,
  getNextColumnIndex,
  getWidthVw,
  SPACING_BETWEEN_VW,
  SPACING_SIDES_VW,
} from ".";
import type { NextColumnTopVws } from ".";

export interface IAddPhotoResult {
  readonly nextColumnTopVws: NextColumnTopVws;
  readonly columnIndex: number;
  readonly widthVw: number;
  readonly heightVw: number;
}

export const addPhoto = (
  nextColumnTopVws: NextColumnTopVws,
  photo: Photo,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IAddPhotoResult => {
  const columnCount = nextColumnTopVws.length;
  const columnIndex = getNextColumnIndex(nextColumnTopVws);
  const widthVw = getWidthVw(columnCount, spacingSidesVw, spacingBetweenVw);
  const heightVw = getHeight(widthVw, photo);
  const columnOffsetVw = heightVw + spacingBetweenVw;

  const updatedNextColumnTopVws = [...nextColumnTopVws];
  updatedNextColumnTopVws[columnIndex] += columnOffsetVw;

  return {
    nextColumnTopVws: updatedNextColumnTopVws,
    columnIndex,
    widthVw,
    heightVw,
  };
};
