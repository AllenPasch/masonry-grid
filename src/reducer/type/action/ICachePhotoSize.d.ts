import type { ICachedPhotoSize } from "@/reducer";

export interface ICachePhotoSize {
  readonly type: "cachePhotoSize";
  readonly photoId: number;
  readonly photoSize: ICachedPhotoSize;
}
