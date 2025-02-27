import { memo } from "react";

import { useCuratedPhotos, usePexelsClient } from "@/api/pexels";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const pexelsClient = usePexelsClient();
  const query = useCuratedPhotos(pexelsClient);

  console.log("query", query);

  return <MasonryGrid />;
};

export default memo(MasonryGridContainer);
