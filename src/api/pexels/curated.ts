import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";
import type { Photos } from "pexels";

import type { PexelsClient } from ".";

export const useCuratedPhotos = (
  pexelsClient: PexelsClient
): UseQueryResult<Photos> => {
  const query = useQuery({
    queryKey: ["pexelsClient.photos.curated"],
    queryFn: () =>
      pexelsClient.photos.curated().then((result) => {
        if ("error" in result) {
          throw result;
        } else {
          return result;
        }
      }),
  });

  return query;
};
