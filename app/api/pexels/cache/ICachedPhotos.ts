import type { IPhoto } from "..";

export interface ICachedPhotos {
  [id: number]: IPhoto;
}
