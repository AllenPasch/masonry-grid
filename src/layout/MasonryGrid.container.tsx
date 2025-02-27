import { memo, useMemo } from "react";

import { createPexelsClient, useCuratedPhotos } from "@/api/pexels";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const pexelsClient = useMemo(createPexelsClient, []);
  const query = useCuratedPhotos(pexelsClient);

  console.log("query", query);

  return <MasonryGrid />;
};

export default memo(MasonryGridContainer);
