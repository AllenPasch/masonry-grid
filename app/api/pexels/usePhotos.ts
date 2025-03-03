import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { addPage } from "~/helper/search/cache";
import { cachedPhotos } from "./cache";
import { getPhotosQueryOptions, usePexelsClient } from ".";

/**
 * @see https://www.pexels.com/api/documentation/#photos-curated
 * @see https://www.pexels.com/api/documentation/#photos-search
 */
export const usePhotos = (pageNumber: number, searchQuery: string) => {
  const client = usePexelsClient();

  const queryOptions = getPhotosQueryOptions(client, pageNumber, searchQuery);
  const queryResult = useQuery(queryOptions);
  const { data } = queryResult;

  useMemo(() => {
    if (data) {
      addPage(searchQuery, pageNumber, data);
      data.photos.forEach((photo) => (cachedPhotos[photo.id] = photo));
    }
  }, [data]);
};
