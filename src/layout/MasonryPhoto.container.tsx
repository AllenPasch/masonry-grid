import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";
import { usePhotoUrl } from "@/helper/photo";
import type { Dispatch, ICachedPhotoSizes } from "@/reducer";
import MasonryPhotoStyled from "./MasonryPhoto.styled";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly cachedPhotoSizes: ICachedPhotoSizes;
  readonly dispatch: Dispatch;
}

const MasonryPhotoContainer = ({
  photoBreakpoints,
  cachedPhotoSizes,
  dispatch,
}: IProps) => {
  const { photo } = photoBreakpoints;
  const url = usePhotoUrl(photo, cachedPhotoSizes, dispatch);

  return <MasonryPhotoStyled photoBreakpoints={photoBreakpoints} url={url} />;
};

export default memo(MasonryPhotoContainer);
