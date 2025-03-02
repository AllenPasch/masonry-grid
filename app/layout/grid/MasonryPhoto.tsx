import { memo } from "react";

import type { IPhotoBreakpoints } from "~/helper/grid";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly url: string;
  readonly className?: string;
}

const MasonryPhoto = ({
  photoBreakpoints: {
    photo: { alt },
  },
  url,
  className,
}: IProps) => <img src={url} alt={alt || ""} className={className} />;

export default memo(MasonryPhoto);
