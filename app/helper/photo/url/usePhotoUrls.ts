import { useMemo } from "react";

import { type IPhotoBreakpoints } from "~/helper/grid";

import { usePhotoSize } from "../size/usePhotoSize";
import { type IPhotoUrls } from ".";
import { getPhotoUrls } from "./getPhotoUrls";

export const usePhotoUrls = (
  photoBreakpoints: IPhotoBreakpoints
): IPhotoUrls => {
  const { photo } = photoBreakpoints;
  const size = usePhotoSize(photoBreakpoints);
  const photoUrl = useMemo(() => getPhotoUrls(photo, size), [photo, size]);

  return photoUrl;
};
