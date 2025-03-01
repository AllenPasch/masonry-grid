import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import type { ICachedPhotoSizes } from "@/reducer";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly cachedPhotoSizes: ICachedPhotoSizes;
}

const MasonryGrid = ({ visiblePhotos, cachedPhotoSizes }: IProps) => (
  <>
    {visiblePhotos.map((photoBreakpoints) => (
      <MasonryPhotoContainer
        photoBreakpoints={photoBreakpoints}
        cachedPhotoSizes={cachedPhotoSizes}
        key={photoBreakpoints.photo.id}
      />
    ))}
  </>
);

export default memo(MasonryGrid);
