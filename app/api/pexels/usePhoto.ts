import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";

import { type IPhoto } from ".";
import { cachePhoto } from "./cache";
import { getPhotoQueryOptions } from "./getPhotoQueryOptions";

/**
 * @see https://www.pexels.com/api/documentation/#photos-show
 */
export const usePhoto = (photoId: number): UseQueryResult<IPhoto> => {
  const queryOptions = getPhotoQueryOptions(photoId);
  const queryResult = useQuery(queryOptions);
  const { data: photo } = queryResult;

  useMemo(() => {
    if (photo) {
      cachePhoto(photo);
    }
  }, [photo]);

  return queryResult;
};
