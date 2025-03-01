import { useMemo } from "react";

import type { Photo } from "@/api/pexels";
import type { ICachedPhotoSizes } from "@/reducer";
import { getPhotoUrl, usePhotoSize } from ".";

export const usePhotoUrl = (
  photo: Photo,
  cachedPhotoSizes: ICachedPhotoSizes
): string => {
  const size = usePhotoSize(photo, cachedPhotoSizes);
  const photoUrl = useMemo(() => getPhotoUrl(photo, size), [photo, size]);

  return photoUrl;
};
