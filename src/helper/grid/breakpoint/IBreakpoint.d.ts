import type { IPhotoPosition, ColumnTopVws } from "../layout";

export interface IBreakpoint {
  readonly photoPositions: readonly IPhotoPosition[];
  readonly columnTopVws: ColumnTopVws;
  readonly nextColumnTopVws: ColumnTopVws;
}
