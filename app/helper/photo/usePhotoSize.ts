import { useMemo } from "react";

import { getColumnCount, getWidthPx } from "~/helper/grid";
import type { IPhotoBreakpoints } from "~/helper/grid";
import { getDevicePixelRatio, getHtmlClientWidth } from "~/helper/screen";
import { cachedPhotoSizes } from "./cache";
import type { IDownloadedPhotoSize } from ".";

export const usePhotoSize = ({
  photo: { id },
  staticHtml,
}: IPhotoBreakpoints): IDownloadedPhotoSize =>
  useMemo(() => {
    let size = cachedPhotoSizes[id];

    if (!size) {
      const htmlClientWidth = getHtmlClientWidth(staticHtml);
      const devicePixelRatio = getDevicePixelRatio();

      const columnCount = getColumnCount(htmlClientWidth);
      const widthPx = getWidthPx(columnCount, htmlClientWidth);

      size = {
        devicePixelRatio,
        widthPx,
      };

      cachedPhotoSizes[id] = size;
    }

    return size;
  }, [id]);
