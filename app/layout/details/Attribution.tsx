import { css } from "@emotion/react";
import { memo } from "react";

import { type IPhoto } from "~/api/pexels";

interface IProps {
  readonly photo: IPhoto;
}

const Attribution = ({
  photo: { alt, photographer, photographer_url, url },
}: IProps) => {
  alt = alt && alt.trim();
  photographer = photographer && photographer.trim();

  return (
    <figcaption
      css={css`
        text-align: center;
      `}
    >
      {Boolean(alt) && (
        <cite>
          {url ? (
            <a
              href={url}
              target="_blank"
              css={css`
                color: var(--foreground);
                font-style: normal;
              `}
            >
              {alt}
            </a>
          ) : (
            alt
          )}
        </cite>
      )}
      {Boolean(photographer) && (
        <>
          <span
            css={css`
              color: var(--foreground);
              opacity: 0.5;
            `}
          >
            {" "}
            by{" "}
          </span>
          {photographer_url ? (
            <a
              href={photographer_url}
              target="_blank"
              css={css`
                color: var(--foreground);
                font-style: normal;
              `}
            >
              {photographer}
            </a>
          ) : (
            photographer
          )}
        </>
      )}
    </figcaption>
  );
};

export default memo(Attribution);
