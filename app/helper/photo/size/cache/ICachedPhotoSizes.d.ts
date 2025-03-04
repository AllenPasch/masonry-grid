import { type PhotoSize } from "..";

export interface ICachedPhotoSizes {
  [id: number]: PhotoSize | undefined;
}
