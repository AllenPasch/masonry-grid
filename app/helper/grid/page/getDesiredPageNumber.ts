import findLast from "lodash/findLast";

import type { IHtmlClientDimensions } from "~/helper/screen";
import type { ISearchResults } from "~/helper/search";
import { getScrollYMidpoint } from ".";

export const getDesiredPageNumber = (
  { pages }: ISearchResults,
  htmlClientDimensions: IHtmlClientDimensions,
  scrollY: number
) => {
  const page = findLast(pages, (page) => !!page);
  if (!page) {
    return 1;
  }

  const pageCount = pages.length - 1;
  const { morePages } = page;
  if (!morePages) {
    return pageCount;
  }

  const scrollYMidpoint = getScrollYMidpoint(page, htmlClientDimensions);
  return scrollY >= scrollYMidpoint ? pageCount + 1 : pageCount;
};
