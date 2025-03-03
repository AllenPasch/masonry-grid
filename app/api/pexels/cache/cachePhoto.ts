import { type IPhoto } from "../IPhoto";
import { cachedPhotos } from "./cachedPhotos";

export const cachePhoto = (photo: IPhoto) => {
  cachedPhotos[photo.id] = photo;
};
