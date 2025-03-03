import { memo, useEffect, useMemo, useState } from "react";

import { usePhotos } from "~/api/pexels";
import { getDesiredPageNumber, getMinGridHeightVws } from "~/helper/grid";
import { getVisiblePhotos } from "~/helper/photo";
import { useHtmlClientDimensions, useScrollY } from "~/helper/screen";
import { getSearchResults } from "~/helper/search";
import MasonryGridStyled from "./MasonryGrid.styled";

const MasonryGridContainer = () => {
  const [searchQuery] = useState(""); // TODO: Allow the user to search.

  const [firstRender, setFirstRender] = useState(true);
  const htmlClientDimensions = useHtmlClientDimensions();
  const scrollY = useScrollY();
  const pageNumber = getDesiredPageNumber(
    getSearchResults(searchQuery),
    htmlClientDimensions,
    scrollY
  );

  usePhotos(pageNumber, searchQuery);

  const searchResults = getSearchResults(searchQuery);
  const minHeightVws = useMemo(
    () => getMinGridHeightVws(searchResults),
    [searchResults]
  );
  const visiblePhotos = getVisiblePhotos(
    searchResults,
    htmlClientDimensions,
    scrollY,
    firstRender
  );

  useEffect(() => setFirstRender(false));

  return (
    <MasonryGridStyled
      minHeightVws={minHeightVws}
      visiblePhotos={visiblePhotos}
    />
  );
};

export default memo(MasonryGridContainer);
