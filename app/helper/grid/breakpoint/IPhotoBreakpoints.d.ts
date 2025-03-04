import { type IPhoto } from "~/api/pexels";

import { type IPhotoPosition } from "..";

export interface IPhotoBreakpoints {
  readonly photo: IPhoto;
  readonly breakpoints: readonly IPhotoPosition[];
  readonly pageNumber: number;
  readonly indexInPage: number;
  readonly staticHtml: boolean;
}
