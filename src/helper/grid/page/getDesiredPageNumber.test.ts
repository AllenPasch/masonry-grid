import type { IHtmlClientDimensions } from "@/helper/screen";
import type { ISearchResults } from "@/reducer";
import type { IBreakpoint } from "..";
import { getDesiredPageNumber } from ".";
import type { IPage } from ".";

describe("getDesiredPageNumber()", () => {
  test("Before the pexels API responds, the desired page number is 1.", () => {
    // Arrange
    const searchResults: ISearchResults = {
      query: "",
      pages: [],
    };

    const htmlClientWidth = 50;
    const htmlClientHeight = 50;
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth,
      htmlClientHeight,
    };
    const scrollY = 0;

    // Act
    const desiredPageNumber = getDesiredPageNumber(
      searchResults,
      htmlClientDimensions,
      scrollY
    );

    // Assert
    expect(desiredPageNumber).toBe(1);
  });

  test("After the pexels API responds, at the top of the window, the page number should remain 1.", () => {
    // Arrange
    const breakpoint: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [4],
      nextColumnTopVws: [504],
    };
    const page: IPage = {
      breakpoints: [breakpoint],
      photos: [],
      morePages: true,
    };
    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page],
    };

    const htmlClientWidth = 50;
    const htmlClientHeight = 50;
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth,
      htmlClientHeight,
    };
    const scrollY = 0;

    // Act
    const desiredPageNumber = getDesiredPageNumber(
      searchResults,
      htmlClientDimensions,
      scrollY
    );

    // Assert
    expect(desiredPageNumber).toBe(1);
  });

  test("After the user scrolls down, the page number should increase to 2.", () => {
    // Arrange
    const breakpoint: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [4],
      nextColumnTopVws: [504],
    };
    const page: IPage = {
      breakpoints: [breakpoint],
      photos: [],
      morePages: true,
    };
    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page],
    };

    const htmlClientWidth = 50;
    const htmlClientHeight = 50;
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth,
      htmlClientHeight,
    };
    const scrollY = 78;

    // Act
    const desiredPageNumber = getDesiredPageNumber(
      searchResults,
      htmlClientDimensions,
      scrollY
    );

    // Assert
    expect(desiredPageNumber).toBe(2);
  });

  test("After the user scrolls down, the page number should remain 1, if there are no more pages.", () => {
    // Arrange
    const breakpoint: IBreakpoint = {
      photoPositions: [],
      columnTopVws: [4],
      nextColumnTopVws: [504],
    };
    const page: IPage = {
      breakpoints: [breakpoint],
      photos: [],
      morePages: false,
    };
    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page],
    };

    const htmlClientWidth = 50;
    const htmlClientHeight = 50;
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth,
      htmlClientHeight,
    };
    const scrollY = 78;

    // Act
    const desiredPageNumber = getDesiredPageNumber(
      searchResults,
      htmlClientDimensions,
      scrollY
    );

    // Assert
    expect(desiredPageNumber).toBe(1);
  });
});
