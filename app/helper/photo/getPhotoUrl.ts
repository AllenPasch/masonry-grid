import type { IPhoto } from "~/api/pexels";

import type { IDownloadedPhotoSize } from ".";

export const getPhotoUrl = (
  { src: { original }, width, height }: IPhoto,
  { devicePixelRatio, widthPx, heightPx }: IDownloadedPhotoSize
): string => {
  const urlFragments = [`${original}?auto=compress&cs=tinysrgb`];

  if (height && heightPx) {
    const aspectRatioOriginal = width / height;
    widthPx = Math.min(heightPx * aspectRatioOriginal, widthPx);
  }

  widthPx = Math.floor(widthPx + 0.25);

  if (devicePixelRatio * widthPx < width) {
    if (devicePixelRatio !== 1) {
      urlFragments.push(`dpr=${devicePixelRatio}`);
    }
    urlFragments.push(`w=${widthPx}`);
  }

  return urlFragments.join("&");
};
