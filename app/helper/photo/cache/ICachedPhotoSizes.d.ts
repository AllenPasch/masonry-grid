import type { IDownloadedPhotoSize } from "..";

export interface ICachedPhotoSizes {
  [id: number]: IDownloadedPhotoSize | undefined;
}
