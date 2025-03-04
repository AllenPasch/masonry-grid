import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { cachePage } from "~/helper/search/cache";

import { cachePhoto } from "./cache";
import { getPhotosQueryOptions } from "./getPhotosQueryOptions";

/**
 * @see https://www.pexels.com/api/documentation/#photos-curated
 * @see https://www.pexels.com/api/documentation/#photos-search
 */
export const usePhotos = (pageNumber: number, searchQuery: string) => {
  const queryOptions = getPhotosQueryOptions(pageNumber, searchQuery);
  const queryResult = useQuery(queryOptions);
  const { data: photos } = queryResult;

  useMemo(() => {
    if (photos) {
      cachePage(photos);
      photos.photos.forEach(cachePhoto);
    }
  }, [photos]);
};
