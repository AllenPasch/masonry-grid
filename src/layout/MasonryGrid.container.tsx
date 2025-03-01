import { memo } from "react";

import { usePhotos } from "@/api/pexels";
import { useHtmlClientWidth } from "@/helper/screen";
import { useMasonryReducer } from "@/reducer";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const htmlClientWidth = useHtmlClientWidth();
  const [{ search, cachedPhotoSizes }, dispatch] = useMasonryReducer();
  const searchResults = search.results[search.query];

  console.log("htmlClientWidth", htmlClientWidth);

  usePhotos(dispatch, 1, "");

  return (
    <MasonryGrid
      searchResults={searchResults}
      cachedPhotoSizes={cachedPhotoSizes}
    />
  );
};

export default memo(MasonryGridContainer);
