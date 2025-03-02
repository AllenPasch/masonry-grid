import { memo } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly minHeightVws: readonly number[];
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly className?: string;
}

const MasonryGrid = ({ visiblePhotos, className }: IProps) => (
  <div className={className}>
    {visiblePhotos.map((photoBreakpoints) => (
      <MasonryPhotoContainer
        photoBreakpoints={photoBreakpoints}
        key={photoBreakpoints.photo.id}
      />
    ))}
  </div>
);

export default memo(MasonryGrid);
