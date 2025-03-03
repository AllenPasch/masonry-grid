import { useMemo } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";
import { getPhotoUrl, usePhotoSize } from ".";

export const usePhotoUrl = (photoBreakpoints: IPhotoBreakpoints): string => {
  const { photo } = photoBreakpoints;
  const size = usePhotoSize(photoBreakpoints);
  const photoUrl = useMemo(() => getPhotoUrl(photo, size), [photo, size]);

  return photoUrl;
};
