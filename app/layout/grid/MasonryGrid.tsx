import { memo } from "react";

import { type IPhotoBreakpoints } from "~/helper/grid";

import Footer from "./Footer";
import MasonryLinkStyled from "./MasonryLink.styled";

interface IProps {
  readonly minHeightVws: readonly number[];
  readonly morePages: boolean;
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly className?: string;
}

const MasonryGrid = ({ visiblePhotos, className }: IProps) => (
  <>
    <main className={className}>
      {visiblePhotos.map((photoBreakpoints) => {
        const {
          photo: { id },
          pageNumber,
          indexInPage,
        } = photoBreakpoints;

        return (
          <MasonryLinkStyled
            photoBreakpoints={photoBreakpoints}
            key={[id, pageNumber, indexInPage].join()}
          />
        );
      })}
    </main>
    <Footer />
  </>
);

export default memo(MasonryGrid);
