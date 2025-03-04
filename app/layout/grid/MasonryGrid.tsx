import { memo, type Dispatch, type SetStateAction } from "react";

import { type IPhotoBreakpoints } from "~/helper/grid";

import Footer from "./Footer";
import MasonryLinkStyled from "./MasonryLink.styled";
import SearchBar from "./SearchBar";

interface IProps {
  readonly minHeightVws: readonly number[];
  readonly morePages: boolean;
  readonly searchQuery: string;
  readonly setSearchQuery: Dispatch<SetStateAction<string>>;
  readonly visiblePhotos: readonly IPhotoBreakpoints[];
  readonly className?: string;
}

const MasonryGrid = ({
  searchQuery,
  setSearchQuery,
  visiblePhotos,
  className,
}: IProps) => (
  <>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className={className}>
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
    </div>
    <Footer />
  </>
);

export default memo(MasonryGrid);
