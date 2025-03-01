import { useMemo } from "react";

import type { Photo } from "@/api/pexels";
import { getColumnCount, getWidthPx } from "@/helper/grid";
import { getHtmlClientWidth } from "@/helper/screen";
import type { ICachedPhotoSize, ICachedPhotoSizes } from ".";

const cachedPhotoSizes: ICachedPhotoSizes = {};

export const usePhotoSize = ({ id }: Photo): ICachedPhotoSize =>
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

      cachedPhotoSizes[id] = size;
    }

    return size;
  }, [id]);
