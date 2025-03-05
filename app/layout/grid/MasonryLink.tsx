import { memo } from "react";
import { Link } from "react-router";

import { type IPhotoBreakpoints } from "~/helper/grid";
import { getAlt } from "~/helper/photo";

import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly className?: string;
}

const MasonryPhoto = ({ photoBreakpoints, className }: IProps) => (
  <Link
    to={`/photo/${photoBreakpoints.photo.id}`}
    className={className}
    aria-label={getAlt(photoBreakpoints.photo, "Photo Details")}
  >
    <MasonryPhotoContainer photoBreakpoints={photoBreakpoints} />
  </Link>
);

export default memo(MasonryPhoto);
