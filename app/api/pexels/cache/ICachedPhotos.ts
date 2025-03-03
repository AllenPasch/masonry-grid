import type { Photo } from "..";

export interface ICachedPhotos {
  [id: number]: Photo;
}
