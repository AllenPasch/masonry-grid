import { type IPhoto } from "~/api/pexels";

export interface IPhotoPosition {
  readonly photo: IPhoto;
  readonly leftVw: number;
  readonly topVw: number;
  readonly bottomVw: number;
  readonly widthVw: number;
  readonly heightVw: number;
  readonly columnIndex: number;
}
