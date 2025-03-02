import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

import { cachedPhotos } from "./cache";
import { usePexelsClient } from ".";
import type { Photo } from ".";

/**
 * @see https://www.pexels.com/api/documentation/#photos-show
 */
export const usePhoto = (photoId: number): UseQueryResult<Photo> => {
  const client = usePexelsClient();

  const result = useQuery({
    queryKey: ["pexels.photo", photoId],
    queryFn: () => {
      const cachedPhoto = cachedPhotos[photoId];
      if (cachedPhoto) {
        return Promise.resolve(cachedPhoto);
      }

      return client.photos.show({ id: photoId }).then((photo) => {
        if ("error" in photo) {
          throw photo;
        } else {
          cachedPhotos[photoId] = photo;
          return photo;
        }
      });
    },
  });

  return result;
};
