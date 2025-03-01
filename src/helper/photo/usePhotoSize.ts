import { useMemo } from "react";

import type { Photo } from "@/api/pexels";
import { getColumnCount, getWidthPx } from "@/helper/grid";
import { getHtmlClientWidth } from "@/helper/screen";
import type { ICachedPhotoSize, ICachedPhotoSizes } from "@/reducer";

export const usePhotoSize = (
  { id }: Photo,
  cachedPhotoSizes: ICachedPhotoSizes
): ICachedPhotoSize =>
  useMemo(() => {
    let size = cachedPhotoSizes[id];

    if (!size) {
      const htmlClientWidth = getHtmlClientWidth();
      const columnCount = getColumnCount(htmlClientWidth);
      const widthPx = getWidthPx(columnCount, htmlClientWidth);

      size = {
        devicePixelRatio: window.devicePixelRatio || 1,
        widthPx,
      };
    }

    return size;
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
