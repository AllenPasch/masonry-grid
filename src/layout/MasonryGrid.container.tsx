import { memo } from "react";

import { usePhotos } from "@/api/pexels";
import { useMasonryReducer } from "@/reducer";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const [{ search }, dispatch] = useMasonryReducer();
  const searchResults = search.results[search.query];

  usePhotos(dispatch, 1, "");

  return <MasonryGrid searchResults={searchResults} />;
};

export default memo(MasonryGridContainer);
