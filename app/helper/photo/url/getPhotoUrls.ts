import { type IPhoto } from "~/api/pexels";

import { type PhotoSize } from "../size";
import { type IPhotoUrls } from ".";
import {
  STATIC_HTML_DEFAULT_SIZE,
  STATIC_HTML_SIZES,
  STATIC_HTML_WIDTHS,
} from "./constants";
import { getPhotoUrl } from "./getPhotoUrl";

export const getPhotoUrls = (photo: IPhoto, size: PhotoSize): IPhotoUrls => {
  if (!("staticHtml" in size)) {
    return {
      src: getPhotoUrl(photo, size),
    };
  }

  const src = getPhotoUrl(photo, STATIC_HTML_DEFAULT_SIZE);
  const sizes = STATIC_HTML_SIZES;

  const srcSet = STATIC_HTML_WIDTHS.map((widthPx) => {
    const url = getPhotoUrl(photo, { widthPx, devicePixelRatio: 1 });

    return `${url} ${widthPx}w`;
  }).join(", ");

  return {
    src,
    srcSet,
    sizes,
  };
};
