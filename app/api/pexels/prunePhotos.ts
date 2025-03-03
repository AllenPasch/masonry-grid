import type { Photos } from "pexels";
import type { IPhotos } from ".";

import { prunePhoto } from "./prunePhoto";

export const prunePhotos = ({ next_page, page, photos }: Photos): IPhotos => ({
  next_page,
  page,
  photos: photos.map(prunePhoto),
});
