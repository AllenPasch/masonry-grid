import Image from "next/image";
import { memo } from "react";

import type { IPhotoBreakpoints } from "@/helper/grid";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly url: string;
  readonly className?: string;
}

// TODO: Consider setting `sizes` for improved static generation.
// See https://nextjs.org/docs/pages/api-reference/components/image#sizes
// See https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#image-optimization

// TODO: Add `priority` to those photos above the fold.
// See https://nextjs.org/docs/pages/api-reference/components/image#priority
const MasonryPhoto = ({
  photoBreakpoints: {
    photo: { width, height, alt },
  },
  url,
  className,
}: IProps) => (
  <Image
    src={url}
    width={width}
    height={height}
    alt={alt || ""}
    className={className}
  />
);

export default memo(MasonryPhoto);
