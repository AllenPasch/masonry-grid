import { css, Global } from "@emotion/react";
import { memo } from "react";

import type { IPhoto } from "~/api/pexels";
import Attribution from "./Attribution";
import BackButtonContainer from "./BackButton.container";
import LargePhotoContainer from "./LargePhoto.container";

interface IProps {
  readonly photo: IPhoto;
}

const Details = ({ photo }: IProps) => (
  <>
    <Global
      styles={css`
        html,
        body {
          overflow-y: hidden;
        }
      `}
    />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: 100svh;
      `}
    >
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <BackButtonContainer />
          <div
            css={css`
              flex-grow: 1;
              padding: 16px;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: center;
              `}
            >
              <Attribution photo={photo} />
            </div>
          </div>
        </div>
      </div>
      <div
        css={css`
          flex-grow: 1;
          padding: 0 16px 16px;
        `}
      >
        <LargePhotoContainer photo={photo} />
      </div>
    </div>
  </>
);

export default memo(Details);
