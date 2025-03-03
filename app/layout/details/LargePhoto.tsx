import { css } from "@emotion/react";
import { memo, type RefObject } from "react";

import type { IPhotoUrls } from "~/helper/photo/url";

interface IProps {
  readonly alt: string;
  readonly cachedUrls: IPhotoUrls | null;
  readonly ref: RefObject<HTMLDivElement | null>;
  readonly largeUrl: string | null;
}

const LargePhoto = ({ alt, cachedUrls, largeUrl, ref }: IProps) => (
  <div
    ref={ref}
    css={[
      css`
        position: relative;
        width: 100%;
        height: 100%;
      `,
    ]}
  >
    {!!cachedUrls && (
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      >
        <img
          src={cachedUrls.src}
          srcSet={cachedUrls.srcSet}
          sizes={cachedUrls.sizes}
          alt={alt}
          css={css`
            object-fit: contain;
            width: 100%;
            height: 100%;
          `}
        />
      </div>
    )}
    {!!largeUrl && (
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      >
        <img
          src={largeUrl}
          alt={alt}
          css={css`
            object-fit: contain;
            width: 100%;
            height: 100%;
          `}
        />
      </div>
    )}
  </div>
);

export default memo(LargePhoto);
