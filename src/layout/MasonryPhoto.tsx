import { memo } from "react";
import { styled } from "styled-components";

import { BREAKPOINTS_PX } from "@/helper/grid";
import type { IPhotoBreakpoints } from "@/helper/grid";
import Photo from "./Photo";

interface IProps {
  readonly photoBreakpoints: IPhotoBreakpoints;
  readonly url: string;
}

const MasonryPhoto = ({
  photoBreakpoints: { photo, breakpoints },
  url,
}: IProps) => {
  const UnstyledPhoto = ({ className }: { className?: string }) => (
    <Photo photo={photo} url={url} className={className} />
  );

  const StyledPhoto = styled(UnstyledPhoto)`
    background: ${photo.avg_color};
    position: absolute;

    ${BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
      const { leftVw, topVw, widthVw, heightVw } = breakpoints[breakpointIndex];

      return `
        @media (min-width: ${breakpointPx}px) {
          left: calc(${leftVw}vw);
          top: calc(${topVw}vw);
          width: calc(${widthVw}vw);
          height: calc(${heightVw}vw);
        }
      `;
    })}
  `;

  return <StyledPhoto />;
};

export default memo(MasonryPhoto);
