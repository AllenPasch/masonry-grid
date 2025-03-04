import { memo, useEffect, useRef, useState } from "react";

import { type IPhoto } from "~/api/pexels";
import { getAlt } from "~/helper/photo";
import { type IPhotoSizeSpecific } from "~/helper/photo/size";
import { getPhotoUrl, useCachedPhotoUrls } from "~/helper/photo/url";
import { getDevicePixelRatio } from "~/helper/screen";

import LargePhoto from "./LargePhoto";

interface IProps {
  readonly photo: IPhoto;
}

const LargePhotoContainer = ({ photo }: IProps) => {
  const alt = getAlt(photo);
  const cachedUrls = useCachedPhotoUrls(photo);
  const [largeUrl, setLargeUrl] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const size: IPhotoSizeSpecific = {
        devicePixelRatio: getDevicePixelRatio(),
        widthPx: current.clientWidth,
        heightPx: current.clientHeight,
      };
      const url = getPhotoUrl(photo, size);

      setLargeUrl(url);
    }
  }, []);

  return (
    <LargePhoto
      alt={alt}
      cachedUrls={cachedUrls}
      largeUrl={largeUrl}
      ref={ref}
    />
  );
};

export default memo(LargePhotoContainer);
