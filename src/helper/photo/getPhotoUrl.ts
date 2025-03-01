import type { Photo } from "@/api/pexels";

import type { ICachedPhotoSize } from "@/reducer";

// TODO: Implement this for real.
export const getPhotoUrl = (photo: Photo, size: ICachedPhotoSize): string =>
  photo.src.large;
