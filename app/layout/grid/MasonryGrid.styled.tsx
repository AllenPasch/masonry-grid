import styled from "@emotion/styled";
import { memo } from "react";

import { BREAKPOINTS_PX } from "~/helper/grid";
import { mediaQuery } from "~/helper/style";

import MasonryGrid from "./MasonryGrid";

const MasonryGridStyled = styled(MasonryGrid)`
  ${({ minHeightVws, morePages }) =>
    BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
      let minHeightVw = minHeightVws[breakpointIndex];
      if (morePages) {
        minHeightVw += 100;
      }

      return mediaQuery(breakpointPx, `min-height: calc(${minHeightVw}vw);`);
    })}
`;

export default memo(MasonryGridStyled);
