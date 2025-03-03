import type { UseQueryOptions } from "@tanstack/react-query";

import { prunePhotos } from ".";
import type { IPexelsClient, IPhotos } from ".";

const PAGE_SIZE = 80;

export const getPhotosQueryOptions = (
  client: IPexelsClient,
  pageNumber: number,
  searchQuery: string
): UseQueryOptions<IPhotos> => ({
  queryKey: ["pexels.photos", pageNumber, searchQuery],
  queryFn: () => {
    const photosPromise = searchQuery
      ? client.photos.search({
          page: pageNumber,
          query: searchQuery,
          per_page: PAGE_SIZE,
        })
      : client.photos.curated({ page: pageNumber, per_page: PAGE_SIZE });

    return photosPromise.then((photos) => {
      if ("error" in photos) {
        throw photos;
      } else {
        return prunePhotos(photos);
      }
    });
  },
});
