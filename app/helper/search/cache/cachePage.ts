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

  const previousPhotoIds = new Set<number>();
  pages.slice(0, pageNumber).forEach((previousPage) => {
    if (previousPage) {
      previousPage.photos.forEach(({ photo: { id } }) =>
        previousPhotoIds.add(id)
      );
    }
  });
  photos = {
    ...photos,
    photos: photos.photos.filter(({ id }) => !previousPhotoIds.has(id)),
  };

  const previousPage = pages[pageNumber - 1];
  const page = fillPage(searchQuery, previousPage, photos);

  pages[pageNumber] = page;
};
