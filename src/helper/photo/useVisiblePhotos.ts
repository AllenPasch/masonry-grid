import { useMemo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import type { IHtmlClientDimensions } from "@/helper/screen";
import type { ISearchResults } from "@/reducer";
import { getVisiblePhotos } from ".";

export const useVisiblePhotos = (
  searchResults: ISearchResults,
  htmlClientDimensions: IHtmlClientDimensions,
  scrollY: number
): readonly IPhotoBreakpoints[] => {
  const visiblePhotos = useMemo(
    () => getVisiblePhotos(searchResults, htmlClientDimensions, scrollY),
    [searchResults, htmlClientDimensions, scrollY]
  );

  return visiblePhotos;
};
