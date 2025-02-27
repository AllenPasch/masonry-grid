import { memo } from "react";

import { useCuratedPhotos, usePexelsClient } from "@/api/pexels";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const pexelsClient = usePexelsClient();
  const query = useCuratedPhotos(pexelsClient);

  return <MasonryGrid photos={query.data?.photos} />;
};

export default memo(MasonryGridContainer);
