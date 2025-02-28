import Image from "next/image";
import { memo } from "react";

import { addPhotoToBreakpoint, initializeNextColumnTopVws } from "@/helper/grid/breakpoint";
import { getHeight, getWidthPx } from "@/helper/grid/layout";

import type { Photo } from "@/api/pexels";

interface IProps {
  readonly photos: readonly Photo[] | undefined;
}

const MasonryGrid = ({ photos }: IProps) => {
  let nextColumnTopVws = initializeNextColumnTopVws(4);
  const columnCount = nextColumnTopVws.length;

  return (
    <>
      {photos?.map((photo, index) => {
        const addPhotoToBreakpointResult = addPhotoToBreakpoint(nextColumnTopVws, photo);
        nextColumnTopVws = addPhotoToBreakpointResult.nextColumnTopVws;

        const htmlClientWidth =
          document.querySelectorAll("html")[0].clientWidth;
        const widthPx = getWidthPx(columnCount, htmlClientWidth);
        const heightPx = getHeight(widthPx, photo);

        return (
          <Image
            src={photo.src.medium}
            width={widthPx}
            height={heightPx}
            alt={photo.alt || ""}
            key={index}
            style={{
              position: "absolute",
              left: `calc(${addPhotoToBreakpointResult.position.leftVw}vw)`,
              top: `calc(${addPhotoToBreakpointResult.position.topVw}vw)`,
            }}
          />
        );
      })}
    </>
  );
};

export default memo(MasonryGrid);
