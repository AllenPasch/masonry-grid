import { useMemo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import type { IHtmlClientDimensions } from "@/helper/screen";
import type { ISearchResults } from "@/reducer";
import { getVisiblePhotos } from ".";

export const useVisiblePhotos = (
  searchResults: ISearchResults,
  { htmlClientWidth, htmlClientHeight }: IHtmlClientDimensions,
  scrollY: number
): readonly IPhotoBreakpoints[] => {
  const visiblePhotos = useMemo(
    () =>
      getVisiblePhotos(
        searchResults,
        { htmlClientWidth, htmlClientHeight },
        scrollY
      ),
    [searchResults, htmlClientWidth, htmlClientHeight, scrollY]
  );

  return visiblePhotos;
};
