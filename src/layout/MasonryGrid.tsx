import Image from "next/image";
import { memo } from "react";

import type { Photo } from "@/api/pexels";

interface IProps {
  readonly photos: readonly Photo[] | undefined;
}

const MasonryGrid = ({ photos }: IProps) => (
  <>
    {photos?.map((photo, index) => (
      <Image
        src={photo.src.original}
        width={photo.width / 20}
        height={photo.height / 20}
        alt={photo.alt || ""}
        key={index}
      />
    ))}
  </>
);

export default memo(MasonryGrid);
