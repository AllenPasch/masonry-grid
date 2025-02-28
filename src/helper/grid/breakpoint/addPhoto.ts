import type { Photo } from "@/api/pexels";

import {
  getHeight,
  getNextColumnIndex,
  getPositionLeftVw,
  getWidthVw,
  SPACING_BETWEEN_VW,
  SPACING_SIDES_VW,
} from "../layout";
import type { IPhotoPosition, NextColumnTopVws } from "../layout";

export interface IAddPhotoResult {
  readonly position: IPhotoPosition;
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
  const leftVw = getPositionLeftVw(
    columnCount,
    columnIndex,
    spacingSidesVw,
    spacingBetweenVw
  );
  const topVw = nextColumnTopVws[columnIndex];
  const widthVw = getWidthVw(columnCount, spacingSidesVw, spacingBetweenVw);
  const heightVw = getHeight(widthVw, photo);

  const columnOffsetVw = heightVw + spacingBetweenVw;
  const updatedNextColumnTopVws = [...nextColumnTopVws];
  updatedNextColumnTopVws[columnIndex] += columnOffsetVw;

  return {
    position: {
      photo,
      leftVw,
      topVw,
      widthVw,
      heightVw,
      columnIndex,
    },
    nextColumnTopVws: updatedNextColumnTopVws,
  };
};
