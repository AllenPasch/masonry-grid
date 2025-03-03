import { css } from "@emotion/react";
import { memo } from "react";
import type { RefObject } from "react";

interface IProps {
  readonly cachedUrl: string | null;
  readonly ref: RefObject<HTMLDivElement | null>;
  readonly largeUrl: string | null;
}

const LargePhoto = ({ cachedUrl, largeUrl, ref }: IProps) => (
  <div
    ref={ref}
    css={css`
      position: relative;
      width: 100%;
      height: 100%;
    `}
  >
    {!!cachedUrl && (
      <div
        css={css`
          background-image: url("${cachedUrl}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      />
    )}
    {!!largeUrl && (
      <div
        css={css`
          background-image: url("${largeUrl}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          width: 100%;
          height: 100%;
        `}
      />
    )}
  </div>
);

export default memo(LargePhoto);
