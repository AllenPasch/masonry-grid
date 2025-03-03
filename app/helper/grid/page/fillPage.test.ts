import type { IPhoto, IPhotos } from "~/api/pexels";

import type { IBreakpoint } from "../breakpoint";
import { SPACING_TOP_VW } from "../layout";
import type { ColumnTopVws } from "../layout";
import { fillPage } from ".";
import type { IPage } from ".";

describe("fillPage()", () => {
  test("At the top of the window, maxColumnCount breakpoints are created, and the first photos are added in each breakpoint.", () => {
    // Arrange
    const photo1 = {
      width: 240,
      height: 120,
    } as IPhoto;

    const photo2 = {
      width: 120,
      height: 240,
    } as IPhoto;

    const photos = {
      photos: [photo1, photo2],
      page: 1,
      next_page: "https://api.pexels.com/v1/curated?page=2&per_page=80",
    } as unknown as IPhotos;
    const searchQuery = "";
    const maxColumnCount = 3;

    // Act
    const page = fillPage(searchQuery, null, photos, maxColumnCount);

    // Assert
    expect(page.breakpoints.length).toBe(maxColumnCount);
    expect(page.morePages).toBe(true);

    expect(page.breakpoints[0].photoPositions.length).toBe(2);
    expect(page.breakpoints[0].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[0].photoPositions[0].columnIndex).toBe(0);
    expect(page.breakpoints[0].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[0].photoPositions[1].columnIndex).toBe(0);
    expect(page.breakpoints[0].columnTopVws).toEqual([SPACING_TOP_VW]);

    expect(page.breakpoints[1].photoPositions.length).toBe(2);
    expect(page.breakpoints[1].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[1].photoPositions[0].columnIndex).toBe(0);
    expect(page.breakpoints[1].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[1].photoPositions[1].columnIndex).toBe(1);
    expect(page.breakpoints[1].columnTopVws).toEqual([
      SPACING_TOP_VW,
      SPACING_TOP_VW,
    ]);

    expect(page.breakpoints[2].photoPositions.length).toBe(2);
    expect(page.breakpoints[2].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[2].photoPositions[0].columnIndex).toBe(0);
    expect(page.breakpoints[2].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[2].photoPositions[1].columnIndex).toBe(1);
    expect(page.breakpoints[2].columnTopVws).toEqual([
      SPACING_TOP_VW,
      SPACING_TOP_VW,
      SPACING_TOP_VW,
    ]);

    expect(page.photos.length).toBe(2);

    expect(page.photos[0].photo).toEqual(photo1);
    expect(page.photos[0].pageNumber).toBe(1);
    expect(page.photos[0].indexInPage).toBe(0);
    expect(page.photos[0].staticHtml).toBe(true);
    expect(page.photos[0].breakpoints.length).toBe(maxColumnCount);
    expect(page.photos[0].breakpoints[0].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[0].columnIndex).toBe(0);
    expect(page.photos[0].breakpoints[1].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[1].columnIndex).toBe(0);
    expect(page.photos[0].breakpoints[2].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[2].columnIndex).toBe(0);

    expect(page.photos[1].photo).toEqual(photo2);
    expect(page.photos[1].pageNumber).toBe(1);
    expect(page.photos[1].indexInPage).toBe(1);
    expect(page.photos[1].staticHtml).toBe(true);
    expect(page.photos[1].breakpoints.length).toBe(maxColumnCount);
    expect(page.photos[1].breakpoints[0].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[0].columnIndex).toBe(0);
    expect(page.photos[1].breakpoints[1].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[1].columnIndex).toBe(1);
    expect(page.photos[1].breakpoints[2].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[2].columnIndex).toBe(1);
  });

  test("For later pages of photos, photos are added at the minimum columnTopVws in each breakpoint.", () => {
    // Arrange
    const photo1 = {
      width: 240,
      height: 120,
    } as IPhoto;

    const photo2 = {
      width: 120,
      height: 240,
    } as IPhoto;

    const previousPage: IPage = {
      breakpoints: [
        {
          nextColumnTopVws: [100] as ColumnTopVws,
        } as IBreakpoint,
        {
          nextColumnTopVws: [100, 95] as ColumnTopVws,
        } as IBreakpoint,
        {
          nextColumnTopVws: [100, 50, 55] as ColumnTopVws,
        } as IBreakpoint,
      ],
      photos: [],
      morePages: true,
    };
    const photos = {
      photos: [photo1, photo2],
      page: 2,
    } as unknown as IPhotos;
    const searchQuery = "";
    const maxColumnCount = 3;

    // Act
    const page = fillPage(searchQuery, previousPage, photos, maxColumnCount);

    // Assert
    expect(page.breakpoints.length).toBe(maxColumnCount);
    expect(page.morePages).toBe(false);

    expect(page.breakpoints[0].photoPositions.length).toBe(2);
    expect(page.breakpoints[0].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[0].photoPositions[0].columnIndex).toBe(0);
    expect(page.breakpoints[0].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[0].photoPositions[1].columnIndex).toBe(0);
    expect(page.breakpoints[0].columnTopVws).toEqual([100]);

    expect(page.breakpoints[1].photoPositions.length).toBe(2);
    expect(page.breakpoints[1].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[1].photoPositions[0].columnIndex).toBe(1);
    expect(page.breakpoints[1].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[1].photoPositions[1].columnIndex).toBe(0);
    expect(page.breakpoints[1].columnTopVws).toEqual([100, 95]);

    expect(page.breakpoints[2].photoPositions.length).toBe(2);
    expect(page.breakpoints[2].photoPositions[0].photo).toEqual(photo1);
    expect(page.breakpoints[2].photoPositions[0].columnIndex).toBe(1);
    expect(page.breakpoints[2].photoPositions[1].photo).toEqual(photo2);
    expect(page.breakpoints[2].photoPositions[1].columnIndex).toBe(2);
    expect(page.breakpoints[2].columnTopVws).toEqual([100, 50, 55]);

    expect(page.photos.length).toBe(2);

    expect(page.photos[0].photo).toEqual(photo1);
    expect(page.photos[0].pageNumber).toBe(2);
    expect(page.photos[0].indexInPage).toBe(0);
    expect(page.photos[0].staticHtml).toBe(false);
    expect(page.photos[0].breakpoints.length).toBe(maxColumnCount);
    expect(page.photos[0].breakpoints[0].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[0].columnIndex).toBe(0);
    expect(page.photos[0].breakpoints[1].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[1].columnIndex).toBe(1);
    expect(page.photos[0].breakpoints[2].photo).toEqual(photo1);
    expect(page.photos[0].breakpoints[2].columnIndex).toBe(1);

    expect(page.photos[1].photo).toEqual(photo2);
    expect(page.photos[1].pageNumber).toBe(2);
    expect(page.photos[1].indexInPage).toBe(1);
    expect(page.photos[1].staticHtml).toBe(false);
    expect(page.photos[1].breakpoints.length).toBe(maxColumnCount);
    expect(page.photos[1].breakpoints[0].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[0].columnIndex).toBe(0);
    expect(page.photos[1].breakpoints[1].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[1].columnIndex).toBe(0);
    expect(page.photos[1].breakpoints[2].photo).toEqual(photo2);
    expect(page.photos[1].breakpoints[2].columnIndex).toBe(2);
  });
});
