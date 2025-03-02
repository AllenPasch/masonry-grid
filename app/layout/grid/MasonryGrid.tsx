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
    {visiblePhotos.map((photoBreakpoints) => {
      const {
        photo: { id },
        pageNumber,
        indexInPage,
      } = photoBreakpoints;

      return (
        <MasonryPhotoContainer
          photoBreakpoints={photoBreakpoints}
          key={[id, pageNumber, indexInPage].join()}
        />
      );
    })}
  </div>
);

export default memo(MasonryGrid);
