import { type UseQueryOptions } from "@tanstack/react-query";

import { STATIC_HTML_PHOTO_COUNT } from "~/helper/grid/page";

import { type IPhotos } from ".";
import { pexelsClient } from "./pexelsClient";
import { prunePhotos } from "./prunePhotos";

/**
 * Minimize the amount of data included in the statically generated HTML.
 */
const PAGE_SIZE = STATIC_HTML_PHOTO_COUNT;

export const getPhotosQueryOptions = (
  pageNumber: number,
  searchQuery: string
): UseQueryOptions<IPhotos> => ({
  queryKey: ["pexels.photos", pageNumber, searchQuery],
  queryFn: async () => {
    const photosPromise = searchQuery
      ? pexelsClient.photos.search({
          page: pageNumber,
          query: searchQuery,
          per_page: PAGE_SIZE,
        })
      : pexelsClient.photos.curated({ page: pageNumber, per_page: PAGE_SIZE });

    const response = await photosPromise;
    if ("error" in response) {
      throw response;
    } else {
      return prunePhotos(response, searchQuery);
    }
  },
  gcTime: Infinity,
});
