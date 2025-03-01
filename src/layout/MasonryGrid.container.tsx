import { memo } from "react";

import { usePhotos } from "@/api/pexels";
import { useHtmlClientDimensions, useScrollY } from "@/helper/screen";
import { useMasonryReducer } from "@/reducer";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const htmlClientDimensions = useHtmlClientDimensions();
  const scrollY = useScrollY();
  const [{ search, cachedPhotoSizes }, dispatch] = useMasonryReducer();
  const searchResults = search.results[search.query];

  console.log("htmlClientDimensions", htmlClientDimensions, "scrollY", scrollY);

  usePhotos(dispatch, 1, "");

  return (
    <MasonryGrid
      searchResults={searchResults}
      cachedPhotoSizes={cachedPhotoSizes}
    />
  );
};

export default memo(MasonryGridContainer);
