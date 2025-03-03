import type { IBreakpoint, IPage } from "~/helper/grid";
import type { ISearchResults } from "~/helper/search";
import {
  getMinGridHeightVws,
  SPACING_BETWEEN_VW,
  SPACING_BOTTOM_VW,
  SPACING_TOP_VW,
} from ".";

describe("getMinGridHeightVws()", () => {
  test("Before the pexels API responds, only a small min-height is used.", () => {
    // Arrange
    const searchResults: ISearchResults = {
      query: "",
      pages: [],
    };
    const maxColumnCount = 2;

    // Act
    const minGridHeightVws = getMinGridHeightVws(searchResults, maxColumnCount);

    // Assert
    expect(minGridHeightVws.length).toBe(2);
    expect(minGridHeightVws[0]).toBe(SPACING_TOP_VW + SPACING_BOTTOM_VW);
    expect(minGridHeightVws[1]).toBe(SPACING_TOP_VW + SPACING_BOTTOM_VW);
  });

  test("The min-height is a small amount more than the max value in nextColumnTopVws.", () => {
    // Arrange
    const page1Breakpoint1: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [SPACING_TOP_VW],
      nextColumnTopVws: [SPACING_TOP_VW],
    };
    const page1Breakpoint2: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [SPACING_TOP_VW, SPACING_TOP_VW],
      nextColumnTopVws: [SPACING_TOP_VW, SPACING_TOP_VW],
    };

    const page2Breakpoint1: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [SPACING_TOP_VW],
      nextColumnTopVws: [107],
    };
    const page2Breakpoint2: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [SPACING_TOP_VW, SPACING_TOP_VW],
      nextColumnTopVws: [107, 113],
    };

    const page1: IPage = {
      breakpoints: [page1Breakpoint1, page1Breakpoint2],
      photos: [],
      morePages: true,
    };
    const page2: IPage = {
      breakpoints: [page2Breakpoint1, page2Breakpoint2],
      photos: [],
      morePages: false,
    };

    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page1, page2],
    };
    const maxColumnCount = 2;

    // Act
    const minGridHeightVws = getMinGridHeightVws(searchResults, maxColumnCount);

    // Assert
    expect(minGridHeightVws.length).toBe(2);
    expect(minGridHeightVws[0]).toBe(
      107 + SPACING_BOTTOM_VW - SPACING_BETWEEN_VW
    );
    expect(minGridHeightVws[1]).toBe(
      113 + SPACING_BOTTOM_VW - SPACING_BETWEEN_VW
    );
  });
});
