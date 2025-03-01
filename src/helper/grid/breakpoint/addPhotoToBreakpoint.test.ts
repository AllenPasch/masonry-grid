import type { Photo } from "@/api/pexels";

import { addPhotoToBreakpoint } from ".";

describe("addPhotoToBreakpoint()", () => {
  test("At the top of the window, the 1st photo is added to column 0.", () => {
    // Arrange
    const photo = {
      width: 240,
      height: 120,
    } as Photo;

    const columnTopVws = [4, 4, 4, 4];
    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 0.5 * expectedPhotoWidthVw;

    // Act
    const result = addPhotoToBreakpoint(
      columnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.position.photo).toEqual(photo);
    expect(result.position.leftVw).toBe(spacingSidesVw);
    expect(result.position.topVw).toBe(4);
    expect(result.position.bottomVw).toBe(4 + expectedPhotoHeightVw);
    expect(result.position.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.position.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.position.columnIndex).toBe(0);
    expect(result.nextColumnTopVws).toEqual([
      4 + expectedPhotoHeightVw + spacingBetweenVw,
      4,
      4,
      4,
    ]);
  });

  test("At the top of the window, the 2nd photo is added to column 1.", () => {
    // Arrange
    const photo = {
      width: 240,
      height: 480,
    } as Photo;

    const columnTopVws = [18.875, 4, 4, 4];
    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 2 * expectedPhotoWidthVw;

    // Act
    const result = addPhotoToBreakpoint(
      columnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.position.photo).toEqual(photo);
    expect(result.position.leftVw).toBe(
      spacingSidesVw + expectedPhotoWidthVw + spacingBetweenVw
    );
    expect(result.position.topVw).toBe(4);
    expect(result.position.bottomVw).toBe(4 + expectedPhotoHeightVw);
    expect(result.position.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.position.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.position.columnIndex).toBe(1);
    expect(result.nextColumnTopVws).toEqual([
      18.875,
      4 + expectedPhotoHeightVw + spacingBetweenVw,
      4,
      4,
    ]);
  });
});
