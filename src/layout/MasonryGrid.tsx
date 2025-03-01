import { memo } from "react";

import type { ISearchResults } from "@/reducer";
import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly searchResults: ISearchResults;
}

const MasonryGrid = ({ searchResults: { pages } }: IProps) => (
  <>
    {pages.map((page) =>
      page?.photos.map((photoBreakpoints) => (
        <MasonryPhotoContainer
          photoBreakpoints={photoBreakpoints}
          key={photoBreakpoints.photo.id}
        />
      ))
    )}
  </>
);

export default memo(MasonryGrid);
