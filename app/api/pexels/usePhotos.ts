import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";

import type { Dispatch } from "~/reducer";
import { cachedPhotos } from "./cache";
import { prunePhotos, usePexelsClient } from ".";
import type { IPhotos } from ".";

const PAGE_SIZE = 80;

/**
 * @see https://www.pexels.com/api/documentation/#photos-curated
 * @see https://www.pexels.com/api/documentation/#photos-search
 */
export const usePhotos = (
  dispatch: Dispatch,
  pageNumber: number,
  searchQuery: string
): UseQueryResult<IPhotos> => {
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
          return prunePhotos(photos);
        }
      });
    },
  });

  const { data: photos } = result;

  useEffect(() => {
    if (photos) {
      dispatch({
        type: "addPageResults",
        query: searchQuery,
        pageNumber,
        photos,
      });

      photos.photos.forEach((photo) => (cachedPhotos[photo.id] = photo));
    }
  }, [photos]);

  return result;
};
