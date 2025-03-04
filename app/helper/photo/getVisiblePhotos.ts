import { type IPhotoBreakpoints } from "~/helper/grid";
import { type IHtmlClientDimensions } from "~/helper/screen";
import { type ISearchResults } from "~/helper/search";

import { getBreakpointIndex } from "../grid/layout";

export const getVisiblePhotos = (
  { pages, query }: ISearchResults,
  { htmlClientWidth, htmlClientHeight }: IHtmlClientDimensions,
  scrollY: number,
  firstRender: boolean
): readonly IPhotoBreakpoints[] => {
  const breakpointIndex = getBreakpointIndex(htmlClientWidth);
  const htmlTopVw = (100 * scrollY) / htmlClientWidth;
  const htmlBottomVw = (100 * (scrollY + htmlClientHeight)) / htmlClientWidth;
  const onlyShowStatic = firstRender && !query && !scrollY;

  return pages
    .map((page) =>
      page
        ? page.photos.filter(({ breakpoints, staticHtml }) => {
            if (onlyShowStatic) {
              return staticHtml;
            }

            const { topVw, bottomVw } = breakpoints[breakpointIndex];
            return htmlTopVw < bottomVw && htmlBottomVw > topVw;
          })
        : []
    )
    .flat();
};
