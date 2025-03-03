import { memo, useEffect, useRef, useState } from "react";

import type { IPhoto } from "~/api/pexels";
import { getPhotoUrl, useCachedPhotoUrl } from "~/helper/photo";
import type { IDownloadedPhotoSize } from "~/helper/photo";
import LargePhoto from "./LargePhoto";

interface IProps {
  readonly photo: IPhoto;
}

const LargePhotoContainer = ({ photo }: IProps) => {
  const cachedUrl = useCachedPhotoUrl(photo);
  const [largeUrl, setLargeUrl] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const size: IDownloadedPhotoSize = {
        devicePixelRatio: window.devicePixelRatio || 1,
        widthPx: current.clientWidth,
        heightPx: current.clientHeight,
      };
      const url = getPhotoUrl(photo, size);

      setLargeUrl(url);
    }
  }, []);

  return <LargePhoto cachedUrl={cachedUrl} largeUrl={largeUrl} ref={ref} />;
};

export default memo(LargePhotoContainer);
