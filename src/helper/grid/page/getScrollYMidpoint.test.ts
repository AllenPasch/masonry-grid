import type { Photo } from "@/api/pexels";

import type { IHtmlClientDimensions } from "@/helper/screen";
import { BREAKPOINTS_PX } from "..";
import type { IBreakpoint } from "..";
import { getScrollYMidpoint } from ".";
import type { IPage } from ".";

describe("getScrollYMidpoint()", () => {
  test("Once the middle of the page is visible on the screen, the next page should be loaded.", () => {
    // Arrange
    const breakpoint1: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [],
      nextColumnTopVws: [],
    };
    const breakpoint2: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [50, 4],
      nextColumnTopVws: [1500, 1004],
    };
    const page: IPage = {
      breakpoints: [breakpoint1, breakpoint2],
      photos: [],
      morePages: true,
    };

    const htmlClientWidth = BREAKPOINTS_PX[1];
    const htmlClientHeight = 0.5 * htmlClientWidth;
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth,
      htmlClientHeight,
    };

    // Act
    const midpoint = getScrollYMidpoint(page, htmlClientDimensions);

    // Assert
    expect(midpoint).toBe(
      Math.floor(5.04 * htmlClientWidth - htmlClientHeight)
    );
  });
});
