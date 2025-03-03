import type { IPhoto } from "~/api/pexels";

export const getHeight = (width: number, photo: IPhoto): number => {
  const photoWidth = photo.width;

  return photoWidth ? (photo.height * width) / photoWidth : 0;
};
