import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import MasonryPhoto from "./MasonryPhoto";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
}

const MasonryPhotoContainer = ({ photoBreakpoints }: IProps) => {
  // TODO: Calculate a URL that's exactly the right width.
  // TODO: Cache the URL once it's generated.
  const url = photoBreakpoints.photo.src.medium;

  return <MasonryPhoto photoBreakpoints={photoBreakpoints} url={url} />;
};

export default memo(MasonryPhotoContainer);
