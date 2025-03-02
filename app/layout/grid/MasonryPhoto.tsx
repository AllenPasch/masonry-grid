import { memo } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly url: string;
  readonly className?: string;
}

const MasonryPhoto = ({
  photoBreakpoints: {
    photo: { width, height, alt },
  },
  url,
  className,
}: IProps) => (
  <img
    src={url}
    width={width}
    height={height}
    alt={alt || ""}
    className={className}
  />
);

export default memo(MasonryPhoto);
