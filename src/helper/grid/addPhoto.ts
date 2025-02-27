import type { Photo } from "@/api/pexels";

import {
  getHeight,
  getNextColumnIndex,
  getPositionLeftVw,
  getWidthVw,
  SPACING_BETWEEN_VW,
  SPACING_SIDES_VW,
} from ".";
import type { NextColumnTopVws } from ".";

export interface IAddPhotoResult {
  readonly positionLeftVw: number;
  readonly positionTopVw: number;
  readonly widthVw: number;
  readonly heightVw: number;
  readonly columnIndex: number;
  readonly nextColumnTopVws: NextColumnTopVws;
}

export const addPhoto = (
  nextColumnTopVws: NextColumnTopVws,
  photo: Photo,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IAddPhotoResult => {
  const columnCount = nextColumnTopVws.length;
  const columnIndex = getNextColumnIndex(nextColumnTopVws);
  const positionLeftVw = getPositionLeftVw(
    columnCount,
    columnIndex,
    spacingSidesVw,
    spacingBetweenVw
  );
  const positionTopVw = nextColumnTopVws[columnIndex];
  const widthVw = getWidthVw(columnCount, spacingSidesVw, spacingBetweenVw);
  const heightVw = getHeight(widthVw, photo);

  const columnOffsetVw = heightVw + spacingBetweenVw;
  const updatedNextColumnTopVws = [...nextColumnTopVws];
  updatedNextColumnTopVws[columnIndex] += columnOffsetVw;

  return {
    positionLeftVw,
    positionTopVw,
    widthVw,
    heightVw,
    columnIndex,
    nextColumnTopVws: updatedNextColumnTopVws,
  };
};
