import { isEqual } from "lodash";
import { useEffect, useMemo, useState } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";
import type { IHtmlClientDimensions } from "~/helper/screen";
import type { ISearchResults } from "~/reducer";
import { getVisiblePhotos } from ".";

export const useVisiblePhotos = (
  searchResults: ISearchResults,
  { htmlClientWidth, htmlClientHeight }: IHtmlClientDimensions,
  scrollY: number
): readonly IPhotoBreakpoints[] => {
  const [visiblePhotos, setVisiblePhotos] = useState<
    readonly IPhotoBreakpoints[]
  >([]);

  const newVisiblePhotos = useMemo(
    () =>
      getVisiblePhotos(
        searchResults,
        { htmlClientWidth, htmlClientHeight },
        scrollY
      ),
    [searchResults, htmlClientWidth, htmlClientHeight, scrollY]
  );

  useEffect(() => {
    if (!isEqual(visiblePhotos, newVisiblePhotos)) {
      setVisiblePhotos(newVisiblePhotos);
    }
  }, [visiblePhotos, newVisiblePhotos]);

  return visiblePhotos;
};
