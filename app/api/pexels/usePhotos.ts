import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

import type { Dispatch } from "~/reducer";
import { cachedPhotos } from "./cache";
import { usePexelsClient } from ".";
import type { Photos } from ".";

const PAGE_SIZE = 80;

/**
 * @see https://www.pexels.com/api/documentation/#photos-curated
 * @see https://www.pexels.com/api/documentation/#photos-search
 */
export const usePhotos = (
  dispatch: Dispatch,
  pageNumber: number,
  searchQuery: string
): UseQueryResult<Photos> => {
  const client = usePexelsClient();

  const result = useQuery({
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
          dispatch({
            type: "addPageResults",
            query: searchQuery,
            pageNumber,
            photos,
          });

          photos.photos.forEach((photo) => (cachedPhotos[photo.id] = photo));

          return photos;
        }
      });
    },
  });

  return result;
};
