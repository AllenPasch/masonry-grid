import styled from "@emotion/styled";
import { memo } from "react";

import { BREAKPOINTS_PX } from "~/helper/grid";
import { mediaQuery } from "~/helper/style";

import MasonryPhoto from "./MasonryPhoto";

const MasonryPhotoStyled = styled(MasonryPhoto)`
  background: ${({ photoBreakpoints }) => photoBreakpoints.photo.avg_color};

  ${({ photoBreakpoints: { breakpoints } }) =>
    BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
      const { leftVw, topVw, widthVw, heightVw } = breakpoints[breakpointIndex];

      return mediaQuery(
        breakpointPx,
        `
          left: calc(${leftVw}vw);
          top: calc(${topVw}vw);
          width: calc(${widthVw}vw);
          height: calc(${heightVw}vw);
      `
      );
    })}
`;

export default memo(MasonryPhotoStyled);
