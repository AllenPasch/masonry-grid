import { type UseQueryOptions } from "@tanstack/react-query";

import { type IPhoto } from ".";
import { cachedPhotos } from "./cache";
import { pexelsClient } from "./pexelsClient";
import { prunePhoto } from "./prunePhoto";

export const getPhotoQueryOptions = (
  photoId: number
): UseQueryOptions<IPhoto> => ({
  queryKey: ["pexels.photo", photoId],
  queryFn: async () => {
    const cachedPhoto = cachedPhotos[photoId];
    if (cachedPhoto) {
      return cachedPhoto;
    }

    const response = await pexelsClient.photos.show({ id: photoId });
    if ("error" in response) {
      throw response;
    } else {
      return prunePhoto(response);
    }
  },
  gcTime: Infinity,
});
