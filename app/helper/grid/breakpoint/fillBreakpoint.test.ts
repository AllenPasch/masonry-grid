import type { IPhoto } from "~/api/pexels";

import { fillBreakpoint } from ".";

describe("fillBreakpoint()", () => {
  test("At the top of the window, the first 2 photos are added to column 0 and column 1.", () => {
    // Arrange
    const photo1 = {
      width: 240,
      height: 120,
    } as IPhoto;

    const photo2 = {
      width: 120,
      height: 240,
    } as IPhoto;

    const columnTopVws = [4, 4, 4, 4];
    const photos = [photo1, photo2];
    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhoto1HeightVw = 0.5 * expectedPhotoWidthVw;
    const expectedPhoto2HeightVw = 2 * expectedPhotoWidthVw;

    // Act
    const breakpoint = fillBreakpoint(
      columnTopVws,
      photos,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(breakpoint.photoPositions.length).toBe(2);
    expect(breakpoint.photoPositions[0].photo).toEqual(photo1);
    expect(breakpoint.photoPositions[0].leftVw).toBe(spacingSidesVw);
    expect(breakpoint.photoPositions[0].topVw).toBe(4);
    expect(breakpoint.photoPositions[0].widthVw).toBe(expectedPhotoWidthVw);
    expect(breakpoint.photoPositions[0].heightVw).toBe(expectedPhoto1HeightVw);
    expect(breakpoint.photoPositions[0].columnIndex).toBe(0);
    expect(breakpoint.photoPositions[1].photo).toEqual(photo2);
    expect(breakpoint.photoPositions[1].leftVw).toBe(
      spacingSidesVw + expectedPhotoWidthVw + spacingBetweenVw
    );
    expect(breakpoint.photoPositions[1].topVw).toBe(4);
    expect(breakpoint.photoPositions[1].widthVw).toBe(expectedPhotoWidthVw);
    expect(breakpoint.photoPositions[1].heightVw).toBe(expectedPhoto2HeightVw);
    expect(breakpoint.photoPositions[1].columnIndex).toBe(1);
    expect(breakpoint.columnTopVws).toEqual([4, 4, 4, 4]);
    expect(breakpoint.nextColumnTopVws).toEqual([
      4 + expectedPhoto1HeightVw + spacingBetweenVw,
      4 + expectedPhoto2HeightVw + spacingBetweenVw,
      4,
      4,
    ]);
  });
});
