import { memo } from "react";

import type { ICachedPhotoSizes, ISearchResults } from "@/reducer";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly searchResults: ISearchResults;
  readonly cachedPhotoSizes: ICachedPhotoSizes;
}

const MasonryGrid = ({
  searchResults: { pages },
  cachedPhotoSizes,
}: IProps) => (
  <>
    {pages.map((page) =>
      page?.photos.map((photoBreakpoints) => (
        <MasonryPhotoContainer
          photoBreakpoints={photoBreakpoints}
          cachedPhotoSizes={cachedPhotoSizes}
          key={photoBreakpoints.photo.id}
        />
      ))
    )}
  </>
);

export default memo(MasonryGrid);
