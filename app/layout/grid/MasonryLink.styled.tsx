import styled from "@emotion/styled";
import { memo } from "react";

import { BREAKPOINTS_PX, getWidthVw, SPACING_SIDES_VW } from "~/helper/grid";
import MasonryLink from "./MasonryLink";

const MasonryLinkStyled = styled(MasonryLink)`
  color: var(--foreground);

  > img {
    position: absolute;
  }

  &:hover,
  &:focus {
    > img {
      z-index: 1;

      ${BREAKPOINTS_PX.map((breakpointPx, breakpointIndex) => {
        const columnCount = breakpointIndex + 1;
        const imageWidthVwOriginal = getWidthVw(columnCount);
        const imageWidthVwHover = imageWidthVwOriginal + 2 * SPACING_SIDES_VW;
        const scale = imageWidthVwHover / imageWidthVwOriginal;

        return `
          @media (min-width: ${breakpointPx}px) {
            transform: scale(${scale});
          }
        `;
      })}
    }
  }
`;

export default memo(MasonryLinkStyled);
