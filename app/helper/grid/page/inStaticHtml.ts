import { STATIC_HTML_PHOTO_COUNT } from "./constant";

export const inStaticHtml = (
  searchQuery: string,
  pageNumber: number,
  indexInPage: number
): boolean =>
  !searchQuery && pageNumber === 1 && indexInPage < STATIC_HTML_PHOTO_COUNT;
