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
  queryFn: async () => {
    const photosPromise = searchQuery
      ? client.photos.search({
          page: pageNumber,
          query: searchQuery,
          per_page: PAGE_SIZE,
        })
      : client.photos.curated({ page: pageNumber, per_page: PAGE_SIZE });

    const response = await photosPromise;
    if ("error" in response) {
      throw response;
    } else {
      return prunePhotos(response);
    }
  },
});
