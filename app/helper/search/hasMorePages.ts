import findLast from "lodash/findLast";

import { type ISearchResults } from ".";

export const hasMorePages = ({ pages }: ISearchResults) =>
  Boolean(findLast(pages, Boolean)?.morePages);
