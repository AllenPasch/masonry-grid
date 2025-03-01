import type { ICachedPhotoSizes, ISearch } from ".";

export interface IState {
  readonly search: ISearch;
  readonly cachedPhotoSizes: ICachedPhotoSizes;
}
