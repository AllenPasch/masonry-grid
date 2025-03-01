import type { Photo } from "@/api/pexels";
import type { IPhotoPosition } from "..";

export interface IPhotoBreakpoints {
  readonly photo: Photo;
  readonly breakpoints: readonly IPhotoPosition[];
}
