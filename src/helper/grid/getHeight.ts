import type { Photo } from "pexels";

export const getHeight = (width: number, photo: Photo): number => {
  const photoWidth = photo.width;

  return photoWidth ? (photo.height * width) / photoWidth : 0;
};
