import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import { usePhotoUrl } from "@/helper/photo";
import type { ICachedPhotoSizes } from "@/reducer";
import MasonryPhoto from "./MasonryPhoto";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly cachedPhotoSizes: ICachedPhotoSizes;
}

const MasonryPhotoContainer = ({
  photoBreakpoints,
  cachedPhotoSizes,
}: IProps) => {
  const { photo } = photoBreakpoints;
  const url = usePhotoUrl(photo, cachedPhotoSizes);

  return <MasonryPhoto photoBreakpoints={photoBreakpoints} url={url} />;
};

export default memo(MasonryPhotoContainer);
