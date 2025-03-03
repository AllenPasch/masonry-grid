import { type IPhoto, type IPhotos } from "~/api/pexels";
import { MAX_COLUMN_COUNT } from "~/helper/grid";

import { getSearchResults } from "..";
import { cachePage } from "./cachePage";

describe("cachePage()", () => {
  test("At the top of the window, MAX_COLUMN_COUNT breakpoints are created, and the first photos are added in each breakpoint.", () => {
    // Arrange
    const photo1 = {
      id: 1,
      width: 240,
      height: 120,
    } as IPhoto;
    const photo2 = {
      id: 2,
      width: 120,
      height: 240,
    } as IPhoto;

    const searchQuery = "";
    const photos: IPhotos = {
      photos: [photo1, photo2],
      page: 1,
      next_page: "https://api.pexels.com/v1/curated?page=2&per_page=80",
      searchQuery,
    };

    // Act
    cachePage(photos);

    const searchResults = getSearchResults(searchQuery);

    // Assert
    expect(searchResults.pages.length).toBe(2);
    expect(searchResults.pages[0]).toBeUndefined();

    const page1 = searchResults.pages[1]!;
    expect(page1.photos.length).toBe(2);

    expect(page1.photos[0].photo).toEqual(photo1);
    expect(page1.photos[0].breakpoints.length).toBe(MAX_COLUMN_COUNT);
    expect(page1.photos[0].breakpoints[0].photo).toEqual(photo1);
    expect(page1.photos[0].breakpoints[0].columnIndex).toBe(0);
    expect(page1.photos[0].breakpoints[1].photo).toEqual(photo1);
    expect(page1.photos[0].breakpoints[1].columnIndex).toBe(0);
    expect(page1.photos[0].breakpoints[2].photo).toEqual(photo1);
    expect(page1.photos[0].breakpoints[2].columnIndex).toBe(0);
    expect(page1.photos[0].breakpoints[3].photo).toEqual(photo1);
    expect(page1.photos[0].breakpoints[3].columnIndex).toBe(0);

    expect(page1.photos[1].photo).toEqual(photo2);
    expect(page1.photos[1].breakpoints.length).toBe(MAX_COLUMN_COUNT);
    expect(page1.photos[1].breakpoints[0].photo).toEqual(photo2);
    expect(page1.photos[1].breakpoints[0].columnIndex).toBe(0);
    expect(page1.photos[1].breakpoints[1].photo).toEqual(photo2);
    expect(page1.photos[1].breakpoints[1].columnIndex).toBe(1);
    expect(page1.photos[1].breakpoints[2].photo).toEqual(photo2);
    expect(page1.photos[1].breakpoints[2].columnIndex).toBe(1);
    expect(page1.photos[1].breakpoints[3].photo).toEqual(photo2);
    expect(page1.photos[1].breakpoints[3].columnIndex).toBe(1);
  });

  test("For later pages of photos, photos are added at the minimum columnTopVws in each breakpoint.", () => {
    // Arrange
    const photo1 = {
      id: 1,
      width: 240,
      height: 120,
    } as IPhoto;
    const photo2 = {
      id: 2,
      width: 120,
      height: 240,
    } as IPhoto;

    const searchQuery = "";
    const photosPage1: IPhotos = {
      photos: [photo1, photo2],
      page: 1,
      next_page: "https://api.pexels.com/v1/curated?page=2&per_page=80",
      searchQuery,
    };

    cachePage(photosPage1);

    const photo3 = {
      id: 3,
      width: 240,
      height: 240,
    } as IPhoto;
    const photo4 = {
      id: 4,
      width: 480,
      height: 120,
    } as IPhoto;

    const photosPage2: IPhotos = {
      photos: [photo3, photo4],
      page: 2,
      next_page: "https://api.pexels.com/v1/curated?page=3&per_page=80",
      searchQuery,
    };

    // Act
    cachePage(photosPage2);

    const searchResults = getSearchResults(searchQuery);

    // Assert
    expect(searchResults.pages.length).toBe(3);
    expect(searchResults.pages[0]).toBeUndefined();
    expect(searchResults.pages[1]).toBeTruthy();

    const page2 = searchResults.pages[2]!;
    expect(page2.photos.length).toBe(2);

    expect(page2.photos[0].photo).toEqual(photo3);
    expect(page2.photos[0].breakpoints.length).toBe(MAX_COLUMN_COUNT);
    expect(page2.photos[0].breakpoints[0].photo).toEqual(photo3);
    expect(page2.photos[0].breakpoints[0].columnIndex).toBe(0);
    expect(page2.photos[0].breakpoints[1].photo).toEqual(photo3);
    expect(page2.photos[0].breakpoints[1].columnIndex).toBe(0);
    expect(page2.photos[0].breakpoints[2].photo).toEqual(photo3);
    expect(page2.photos[0].breakpoints[2].columnIndex).toBe(2);
    expect(page2.photos[0].breakpoints[3].photo).toEqual(photo3);
    expect(page2.photos[0].breakpoints[3].columnIndex).toBe(2);

    expect(page2.photos[1].photo).toEqual(photo4);
    expect(page2.photos[1].breakpoints.length).toBe(MAX_COLUMN_COUNT);
    expect(page2.photos[1].breakpoints[0].photo).toEqual(photo4);
    expect(page2.photos[1].breakpoints[0].columnIndex).toBe(0);
    expect(page2.photos[1].breakpoints[1].photo).toEqual(photo4);
    expect(page2.photos[1].breakpoints[1].columnIndex).toBe(0);
    expect(page2.photos[1].breakpoints[2].photo).toEqual(photo4);
    expect(page2.photos[1].breakpoints[2].columnIndex).toBe(0);
    expect(page2.photos[1].breakpoints[3].photo).toEqual(photo4);
    expect(page2.photos[1].breakpoints[3].columnIndex).toBe(3);
  });
});
