import type { Photo } from "~/api/pexels";

import type { ICachedPhotoSize } from ".";

export const getPhotoUrl = (
  { src: { original }, width }: Photo,
  { devicePixelRatio, widthPx }: ICachedPhotoSize
): string => {
  const urlFragments = [`${original}?auto=compress&cs=tinysrgb`];

  widthPx = Math.floor(widthPx + 0.25);

  if (devicePixelRatio * widthPx < width) {
    if (devicePixelRatio !== 1) {
      urlFragments.push(`dpr=${devicePixelRatio}`);
    }
    urlFragments.push(`w=${widthPx}`);
  }

  return urlFragments.join("&");
};
