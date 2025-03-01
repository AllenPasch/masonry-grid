import { useMemo } from "react";

import type { Photo } from "@/api/pexels";
import type { Dispatch, ICachedPhotoSizes } from "@/reducer";
import { getPhotoUrl, usePhotoSize } from ".";

export const usePhotoUrl = (
  photo: Photo,
  cachedPhotoSizes: ICachedPhotoSizes,
  dispatch: Dispatch
): string => {
  const size = usePhotoSize(photo, cachedPhotoSizes, dispatch);
  const photoUrl = useMemo(() => getPhotoUrl(photo, size), [photo, size]);

  return photoUrl;
};
