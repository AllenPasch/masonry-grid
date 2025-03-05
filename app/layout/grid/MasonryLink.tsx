import { memo } from "react";
import { Link } from "react-router";

import { type IPhotoBreakpoints } from "~/helper/grid";

import MasonryPhotoContainer from "./MasonryPhoto.container";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly className?: string;
}

const MasonryPhoto = ({ photoBreakpoints, className }: IProps) => (
  <Link
    to={`/photo/${photoBreakpoints.photo.id}`}
    className={className}
    aria-label={photoBreakpoints.photo.alt || "Photo Details"}
  >
    <MasonryPhotoContainer photoBreakpoints={photoBreakpoints} />
  </Link>
);

export default memo(MasonryPhoto);
