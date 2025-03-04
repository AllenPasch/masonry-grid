import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

import { usePhotos } from "~/api/pexels";
import { getDesiredPageNumber, getMinGridHeightVws } from "~/helper/grid";
import { getVisiblePhotos } from "~/helper/photo";
import { useHtmlClientDimensions, useScrollY } from "~/helper/screen";
import { getSearchResults, hasMorePages } from "~/helper/search";

import MasonryGridStyled from "./MasonryGrid.styled";

const MasonryGridContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const setSearchQuery = useCallback((searchQuery: string) => {
    const params = searchQuery ? { search: searchQuery } : undefined;
    setSearchParams(params, { replace: true });
  }, []);

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
  const morePages = hasMorePages(searchResults);
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
      morePages={morePages}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      visiblePhotos={visiblePhotos}
    />
  );
};

export default memo(MasonryGridContainer);
