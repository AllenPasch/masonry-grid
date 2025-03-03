import { memo } from "react";

import { type IPhotoBreakpoints } from "~/helper/grid";
import type { IPhotoUrls } from "~/helper/photo/url";

interface IProps {
  readonly alt: string;
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly urls: IPhotoUrls;
  readonly className?: string;
}

const MasonryPhoto = ({
  alt,
  photoBreakpoints: {
    photo: { photographer },
  },
  urls: { src, srcSet, sizes },
  className,
}: IProps) => (
  <img
    src={src}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    className={className}
  />
);

export default memo(MasonryPhoto);
