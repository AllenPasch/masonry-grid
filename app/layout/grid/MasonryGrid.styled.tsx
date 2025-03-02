import styled from "@emotion/styled";
import { memo } from "react";

import { BREAKPOINTS_PX } from "~/helper/grid";
import MasonryGrid from "./MasonryGrid";

const MasonryGridStyled = styled(MasonryGrid)`
  ${({ minHeightVws }) =>
    BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
      const minHeightVw = minHeightVws[breakpointIndex];

      return `
        @media (min-width: ${breakpointPx}px) {
          min-height: calc(${minHeightVw}vw);
        }
      `;
    })}
`;

export default memo(MasonryGridStyled);
