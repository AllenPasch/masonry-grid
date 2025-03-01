import { useMemo } from "react";

import type { Photo } from "@/api/pexels";
import { getPhotoUrl, usePhotoSize } from ".";

export const usePhotoUrl = (photo: Photo): string => {
  const size = usePhotoSize(photo);
  const photoUrl = useMemo(() => getPhotoUrl(photo, size), [photo, size]);

  return photoUrl;
};
