import { useMemo } from "react";

import { type IPhoto } from "~/api/pexels";

import { cachedPhotoSizes } from "../size/cache";
import { type IPhotoUrls } from ".";
import { getPhotoUrls } from "./getPhotoUrls";

/**
 * If the photo has already loaded, returns the cached URL.
 *
 * If the photo has not already loaded, returns `null`.
 */
export const useCachedPhotoUrls = (photo: IPhoto): IPhotoUrls | null => {
  const size = cachedPhotoSizes[photo.id];
  const photoUrls = useMemo(
    () => (size ? getPhotoUrls(photo, size) : null),
    [photo, size]
  );

  return photoUrls;
};
