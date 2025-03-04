import { memo } from "react";

import { type IPhotoBreakpoints } from "~/helper/grid";
import { getAlt } from "~/helper/photo";
import { usePhotoUrls } from "~/helper/photo/url";

import MasonryPhotoStyled from "./MasonryPhoto.styled";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
}

const MasonryPhotoContainer = ({ photoBreakpoints }: IProps) => {
  const alt = getAlt(photoBreakpoints.photo);
  const urls = usePhotoUrls(photoBreakpoints);

  return <MasonryPhotoStyled alt={alt} photoBreakpoints={photoBreakpoints} urls={urls} />;
};

export default memo(MasonryPhotoContainer);
