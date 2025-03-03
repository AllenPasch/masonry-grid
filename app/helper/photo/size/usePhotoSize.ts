import { useMemo } from "react";

import {
  getColumnCount,
  getWidthPx,
  type IPhotoBreakpoints,
} from "~/helper/grid";
import { getDevicePixelRatio, getHtmlClientWidth } from "~/helper/screen";
import { cachedPhotoSizes } from "./cache";
import { type PhotoSize } from ".";

export const usePhotoSize = ({
  photo: { id },
  staticHtml,
}: IPhotoBreakpoints): PhotoSize =>
  useMemo(() => {
    let size = cachedPhotoSizes[id];

    if (!size) {
      if (staticHtml) {
        size = {
          staticHtml,
        };
      } else {
        const htmlClientWidth = getHtmlClientWidth();
        const devicePixelRatio = getDevicePixelRatio();

        const columnCount = getColumnCount(htmlClientWidth);
        const widthPx = getWidthPx(columnCount, htmlClientWidth);

        size = {
          devicePixelRatio,
          widthPx,
        };
      }

      cachedPhotoSizes[id] = size;
    }

    return size;
  }, [id]);
