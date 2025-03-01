import { memo } from "react";

import { usePhotos } from "@/api/pexels";
import { useMasonryReducer } from "@/reducer";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const [{ search, cachedPhotoSizes }, dispatch] = useMasonryReducer();
  const searchResults = search.results[search.query];

  usePhotos(dispatch, 1, "");

  return (
    <MasonryGrid
      searchResults={searchResults}
      cachedPhotoSizes={cachedPhotoSizes}
    />
  );
};

export default memo(MasonryGridContainer);
