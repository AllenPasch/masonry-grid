import { memo } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";
import { usePhotoUrl } from "~/helper/photo";
import MasonryPhotoStyled from "./MasonryPhoto.styled";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
}

const MasonryPhotoContainer = ({ photoBreakpoints }: IProps) => {
  const { photo } = photoBreakpoints;
  const url = usePhotoUrl(photo);

  return <MasonryPhotoStyled photoBreakpoints={photoBreakpoints} url={url} />;
};

export default memo(MasonryPhotoContainer);
