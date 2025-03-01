import Image from "next/image";
import { memo } from "react";

import type { Photo } from "@/api/pexels";

interface IProps {
  readonly photo: Photo;
  readonly url: string;
  readonly className?: string;
}

const Photo = ({ className, photo: { width, height, alt }, url }: IProps) => (
  <Image
    src={url}
    width={width}
    height={height}
    alt={alt || ""}
    className={className}
  />
);

export default memo(Photo);
