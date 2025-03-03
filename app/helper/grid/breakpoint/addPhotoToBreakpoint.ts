import type { IPhoto } from "~/api/pexels";

import {
  getHeight,
  getNextColumnIndex,
  getPositionLeftVw,
  getWidthVw,
  SPACING_BETWEEN_VW,
  SPACING_SIDES_VW,
} from "../layout";
import type { IPhotoPosition, ColumnTopVws } from "../layout";

interface IAddPhotoToBreakpointResult {
  readonly position: IPhotoPosition;
  readonly nextColumnTopVws: ColumnTopVws;
}

export const addPhotoToBreakpoint = (
  columnTopVws: ColumnTopVws,
  photo: IPhoto,
  spacingSidesVw: number = SPACING_SIDES_VW,
  spacingBetweenVw: number = SPACING_BETWEEN_VW
): IAddPhotoToBreakpointResult => {
  const columnCount = columnTopVws.length;
  const columnIndex = getNextColumnIndex(columnTopVws);
  const leftVw = getPositionLeftVw(
    columnCount,
    columnIndex,
    spacingSidesVw,
    spacingBetweenVw
  );
  const topVw = columnTopVws[columnIndex];
  const widthVw = getWidthVw(columnCount, spacingSidesVw, spacingBetweenVw);
  const heightVw = getHeight(widthVw, photo);
  const bottomVw = topVw + heightVw;

  const columnOffsetVw = heightVw + spacingBetweenVw;
  const nextColumnTopVws = [...columnTopVws];
  nextColumnTopVws[columnIndex] += columnOffsetVw;

  return {
    position: {
      photo,
      leftVw,
      topVw,
      bottomVw,
      widthVw,
      heightVw,
      columnIndex,
    },
    nextColumnTopVws,
  };
};
