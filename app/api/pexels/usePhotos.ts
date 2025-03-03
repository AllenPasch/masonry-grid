import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";

import type { Dispatch } from "~/reducer";
import { cachedPhotos } from "./cache";
import { getPhotosQueryOptions, usePexelsClient } from ".";
import type { IPhotos } from ".";

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

  const queryOptions = getPhotosQueryOptions(client, pageNumber, searchQuery);
  const queryResult = useQuery(queryOptions);
  const { data: photos } = queryResult;

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

  return queryResult;
};
