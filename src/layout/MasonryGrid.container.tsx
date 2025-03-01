import { memo, useState } from "react";

import { usePhotos } from "@/api/pexels";
import { useVisiblePhotos } from "@/helper/photo";
import { useHtmlClientDimensions, useScrollY } from "@/helper/screen";
import { useMasonryReducer } from "@/reducer";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const htmlClientDimensions = useHtmlClientDimensions();
  const scrollY = useScrollY();
  const [{ search, cachedPhotoSizes }, dispatch] = useMasonryReducer();
  const searchResults = search.results[search.query];
  const visiblePhotos = useVisiblePhotos(
    searchResults,
    htmlClientDimensions,
    scrollY
  );

  const pageNumber = 1; // TODO: Calculate the page number that needs to be loaded.
  const [searchQuery] = useState(""); // TODO: Allow the user to search.
  usePhotos(dispatch, pageNumber, searchQuery);

  return (
    <MasonryGrid
      visiblePhotos={visiblePhotos}
      cachedPhotoSizes={cachedPhotoSizes}
    />
  );
};

export default memo(MasonryGridContainer);
