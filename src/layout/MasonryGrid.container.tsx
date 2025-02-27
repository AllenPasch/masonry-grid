import { memo } from "react";

import { useCuratedPhotos, usePexelsClient } from "@/api/pexels";
import MasonryGrid from "./MasonryGrid";

const MasonryGridContainer = () => {
  const pexelsClient = usePexelsClient();
  const curatedPhotos = useCuratedPhotos(pexelsClient);

  return <MasonryGrid photos={curatedPhotos.data?.photos} />;
};

export default memo(MasonryGridContainer);
