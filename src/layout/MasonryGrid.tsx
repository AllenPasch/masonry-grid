import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import type { Dispatch, ICachedPhotoSizes } from "@/reducer";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly cachedPhotoSizes: ICachedPhotoSizes;
  readonly dispatch: Dispatch;
}

const MasonryGrid = ({ visiblePhotos, cachedPhotoSizes, dispatch }: IProps) => (
  <>
    {visiblePhotos.map((photoBreakpoints) => (
      <MasonryPhotoContainer
        photoBreakpoints={photoBreakpoints}
        cachedPhotoSizes={cachedPhotoSizes}
        dispatch={dispatch}
        key={photoBreakpoints.photo.id}
      />
    ))}
  </>
);

export default memo(MasonryGrid);
