import { type IPhotos } from "~/api/pexels";
import { fillPage } from "~/helper/grid/page";

import { cachedPages } from "./cachedPages";

export const cachePage = (photos: IPhotos) => {
  const { page: pageNumber, searchQuery } = photos;

  let pages = cachedPages[searchQuery];
  if (!pages) {
    pages = [];
    cachedPages[searchQuery] = pages;
  }

  const previousPage = pages[pageNumber - 1];
  const page = fillPage(searchQuery, previousPage, photos);

  pages[pageNumber] = page;
};
