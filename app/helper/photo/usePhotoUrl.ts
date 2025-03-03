import { useMemo } from "react";

import type { IPhoto } from "~/api/pexels";
import { getPhotoUrl, usePhotoSize } from ".";

export const usePhotoUrl = (photo: IPhoto): string => {
  const size = usePhotoSize(photo);
  const photoUrl = useMemo(() => getPhotoUrl(photo, size), [photo, size]);

  return photoUrl;
};
