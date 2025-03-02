import { getBreakpointIndex } from "../grid/layout";
import type { IPhotoBreakpoints } from "~/helper/grid";
import type { IHtmlClientDimensions } from "~/helper/screen";
import type { ISearchResults } from "~/reducer";

export const getVisiblePhotos = (
  { pages }: ISearchResults,
  { htmlClientWidth, htmlClientHeight }: IHtmlClientDimensions,
  scrollY: number
): readonly IPhotoBreakpoints[] => {
  const breakpointIndex = getBreakpointIndex(htmlClientWidth);
  const htmlTopVw = (100 * scrollY) / htmlClientWidth;
  const htmlBottomVw = (100 * (scrollY + htmlClientHeight)) / htmlClientWidth;

  return pages
    .map((page) =>
      page
        ? page.photos.filter(({ breakpoints }) => {
            const { topVw, bottomVw } = breakpoints[breakpointIndex];

            return htmlTopVw < bottomVw && htmlBottomVw > topVw;
          })
        : []
    )
    .flat();
};
