import { type IPhoto } from "~/api/pexels";
import { BREAKPOINTS_PX } from "~/helper/grid";
import { type IPage, type IPhotoBreakpoints } from "~/helper/grid";
import { type IHtmlClientDimensions } from "~/helper/screen";
import { type ISearchResults } from "~/helper/search";

import { getVisiblePhotos } from "./getVisiblePhotos";

describe("getVisiblePhotos()", () => {
  test("Before the pexels API responds, no photos are visible.", () => {
    // Arrange
    const searchResults: ISearchResults = {
      query: "",
      pages: [],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 100,
    };
    const scrollY = 0;
    const firstRender = true;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(0);
  });

  test("When the static HTML first loads, only the photos in the static HTML are visible.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: true,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 100,
    };
    const scrollY = 0;
    const firstRender = true;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(1);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
  });

  test("When the static HTML loads, and the React code renders more than 1 time, the code determines whether more photos need to be loaded.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: true,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 100,
    };
    const scrollY = 0;
    const firstRender = false;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(2);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
    expect(visiblePhotos[1]).toEqual(photoBreakpoints2);
  });

  test("Searching on a very tiny and short screen, at the top of the window, only the 1st photo is visible.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: false,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "cat",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 50,
    };
    const scrollY = 0;
    const firstRender = true;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(1);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
  });

  test("Searching on a very tiny screen, at the top of the window, the first 2 photos are visible if the screen is tall enough.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: false,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "cat",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 100,
    };
    const scrollY = 0;
    const firstRender = true;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(2);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
    expect(visiblePhotos[1]).toEqual(photoBreakpoints2);
  });

  test("Searching on a very tiny and short screen, if the user scrolls down enough, the first 2 photos are visible.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: false,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "cat",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 50,
    };
    const scrollY = 40;
    const firstRender = false;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(2);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
    expect(visiblePhotos[1]).toEqual(photoBreakpoints2);
  });

  test("Searching on a very tiny and short screen, if the user scrolls too much, only the 2nd photo is visible.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: false,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "cat",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: 100,
      htmlClientHeight: 50,
    };
    const scrollY = 76;
    const firstRender = false;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(1);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints2);
  });

  test("Searching on a really short screen with 2 columns, at the top of the window, the first 2 photos are visible.", () => {
    // Arrange
    const photo1 = { id: 1 } as IPhoto;
    const photo2 = { id: 2 } as IPhoto;

    const photoBreakpoints1: IPhotoBreakpoints = {
      photo: photo1,
      breakpoints: [
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 92,
          heightVw: 71,
          columnIndex: 0,
        },
        {
          photo: photo1,
          leftVw: 4,
          topVw: 4,
          bottomVw: 75,
          widthVw: 45,
          heightVw: 71,
          columnIndex: 0,
        },
      ],
      pageNumber: 1,
      indexInPage: 0,
      staticHtml: false,
    };
    const photoBreakpoints2: IPhotoBreakpoints = {
      photo: photo2,
      breakpoints: [
        {
          photo: photo2,
          leftVw: 4,
          topVw: 77,
          bottomVw: 150,
          widthVw: 92,
          heightVw: 73,
          columnIndex: 0,
        },
        {
          photo: photo2,
          leftVw: 4,
          topVw: 4,
          bottomVw: 77,
          widthVw: 45,
          heightVw: 73,
          columnIndex: 1,
        },
      ],
      pageNumber: 1,
      indexInPage: 1,
      staticHtml: false,
    };

    const page1: IPage = {
      breakpoints: [],
      photos: [photoBreakpoints1, photoBreakpoints2],
      morePages: true,
    };

    const searchResults: ISearchResults = {
      query: "cat",
      pages: [undefined, page1],
    };
    const htmlClientDimensions: IHtmlClientDimensions = {
      htmlClientWidth: BREAKPOINTS_PX[1],
      htmlClientHeight: 50,
    };
    const scrollY = 0;
    const firstRender = true;

    // Act
    const visiblePhotos = getVisiblePhotos(
      searchResults,
      htmlClientDimensions,
      scrollY,
      firstRender
    );

    // Assert
    expect(visiblePhotos.length).toBe(2);
    expect(visiblePhotos[0]).toEqual(photoBreakpoints1);
    expect(visiblePhotos[1]).toEqual(photoBreakpoints2);
  });
});
