import { useMemo } from "react";

import type { IPhoto } from "~/api/pexels";
import { cachedPhotoSizes } from "./cache";
import { getPhotoUrl } from ".";

export const useCachedPhotoUrl = (photo: IPhoto): string | null => {
  const size = cachedPhotoSizes[photo.id];
  const photoUrl = useMemo(
    () => (size ? getPhotoUrl(photo, size) : null),
    [photo, size]
  );

  return photoUrl;
};
