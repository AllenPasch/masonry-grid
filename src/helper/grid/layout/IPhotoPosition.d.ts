import type { Photo } from "@/api/pexels";

export interface IPhotoPosition {
  readonly photo: Photo;
  readonly leftVw: number;
  readonly topVw: number;
  readonly widthVw: number;
  readonly heightVw: number;
  readonly columnIndex: number;
}
