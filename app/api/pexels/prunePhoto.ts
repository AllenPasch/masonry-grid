import { type Photo } from "pexels";

import { type IPhoto } from ".";

export const prunePhoto = ({
  id,
  width,
  height,
  url,
  alt,
  avg_color,
  photographer,
  photographer_url,
  src: { original },
}: Photo): IPhoto => ({
  id,
  width,
  height,
  url,
  alt,
  avg_color,
  photographer,
  photographer_url,
  src: {
    original,
  },
});
