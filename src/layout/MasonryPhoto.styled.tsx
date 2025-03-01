import { memo } from "react";
import { styled } from "styled-components";

import { BREAKPOINTS_PX } from "@/helper/grid";
import MasonryPhoto from "./MasonryPhoto";

const MasonryPhotoStyled = styled(MasonryPhoto)`
  background: ${({ photoBreakpoints }) => photoBreakpoints.photo.avg_color};
  position: absolute;

  ${({ photoBreakpoints: { breakpoints } }) =>
    BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
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

export default memo(MasonryPhotoStyled);
