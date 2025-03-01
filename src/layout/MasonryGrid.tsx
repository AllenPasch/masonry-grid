import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import type { Dispatch, ICachedPhotoSizes } from "@/reducer";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly minHeightVws: readonly number[];
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly cachedPhotoSizes: ICachedPhotoSizes;
  readonly dispatch: Dispatch;
  readonly className?: string;
}

const MasonryGrid = ({
  visiblePhotos,
  cachedPhotoSizes,
  dispatch,
  className,
}: IProps) => (
  <div className={className}>
    {visiblePhotos.map((photoBreakpoints) => (
      <MasonryPhotoContainer
        photoBreakpoints={photoBreakpoints}
        cachedPhotoSizes={cachedPhotoSizes}
        dispatch={dispatch}
        key={photoBreakpoints.photo.id}
      />
    ))}
  </div>
);

export default memo(MasonryGrid);
