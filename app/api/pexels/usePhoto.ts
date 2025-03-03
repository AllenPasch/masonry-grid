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
    queryFn: async () => {
      const cachedPhoto = cachedPhotos[photoId];
      if (cachedPhoto) {
        cachedPhoto;
      }

      const response = await client.photos.show({ id: photoId });
      if ("error" in response) {
        throw response;
      } else {
        const photo = prunePhoto(response);

        cachedPhotos[photoId] = photo;
        return photo;
      }
    },
  });

  return result;
};
