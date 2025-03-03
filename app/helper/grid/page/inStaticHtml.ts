const PHOTOS_IN_STATIC_HTML = 25;

export const inStaticHtml = (
  searchQuery: string,
  pageNumber: number,
  indexInPage: number
): boolean =>
  !searchQuery && pageNumber === 1 && indexInPage < PHOTOS_IN_STATIC_HTML;
