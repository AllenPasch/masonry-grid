import { memo, useMemo, useState } from "react";

import { usePhotos } from "~/api/pexels";
import { getDesiredPageNumber, getMinGridHeightVws } from "~/helper/grid";
import { useVisiblePhotos } from "~/helper/photo";
import { useHtmlClientDimensions, useScrollY } from "~/helper/screen";
import { useReducer } from "~/reducer";
import MasonryGridStyled from "./MasonryGrid.styled";

interface IProps {
  readonly hydrationData: string | undefined;
}

const MasonryGridContainer = ({}: IProps) => {
  const htmlClientDimensions = useHtmlClientDimensions();
  const scrollY = useScrollY();
  const [{ search }, dispatch] = useReducer();
  const searchResults = search.results[search.query];

  const minHeightVws = useMemo(
    () => getMinGridHeightVws(searchResults),
    [searchResults]
  );
  const visiblePhotos = useVisiblePhotos(
    searchResults,
    htmlClientDimensions,
    scrollY
  );
  const pageNumber = getDesiredPageNumber(
    searchResults,
    htmlClientDimensions,
    scrollY
  );
  const [searchQuery] = useState(""); // TODO: Allow the user to search.

  usePhotos(dispatch, pageNumber, searchQuery);

  return (
    <MasonryGridStyled
      minHeightVws={minHeightVws}
      visiblePhotos={visiblePhotos}
    />
  );
};

export default memo(MasonryGridContainer);
