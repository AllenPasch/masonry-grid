import { useQuery } from "@tanstack/react-query";
import type { UseQueryResult } from "@tanstack/react-query";

import { cachedPhotos } from "./cache";
import { prunePhoto, usePexelsClient } from ".";
import type { IPhoto } from ".";

/**
 * @see https://www.pexels.com/api/documentation/#photos-show
 */
export const usePhoto = (photoId: number): UseQueryResult<IPhoto> => {
  const client = usePexelsClient();

  const result = useQuery({
    queryKey: ["pexels.photo", photoId],
    queryFn: () => {
      const cachedPhoto = cachedPhotos[photoId];
      if (cachedPhoto) {
        return Promise.resolve(cachedPhoto);
      }

      return client.photos
        .show({ id: photoId })
        .then((photoWithExtraFields) => {
          if ("error" in photoWithExtraFields) {
            throw photoWithExtraFields;
          } else {
            const photo = prunePhoto(photoWithExtraFields);

            cachedPhotos[photoId] = photo;
            return photo;
          }
        });
    },
  });

  return result;
};
