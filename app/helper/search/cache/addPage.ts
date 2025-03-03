import { IPhotos } from "~/api/pexels";
import { fillPage } from "~/helper/grid/page";
import { cachedPages } from ".";

// TODO: Unit test, like the reducer.
export const addPage = (
  searchQuery: string,
  pageNumber: number,
  photos: IPhotos
) => {
  let pages = cachedPages[searchQuery];
  if (!pages) {
    pages = [];
    cachedPages[searchQuery] = pages;
  }

  const previousPage = pages[pageNumber - 1];
  const page = fillPage(previousPage, photos);

  pages[pageNumber] = page;
};
