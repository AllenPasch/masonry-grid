import type { Photo } from "@/api/pexels";
import { addPhoto } from ".";

describe("addPhoto()", () => {
  test("At the top of the page, the 1st photo is added to column 0.", () => {
    // Arrange
    const nextColumnTopVws = [4, 4, 4, 4];

    const photo = {
      width: 240,
      height: 120,
    } as Photo;

    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 0.5 * expectedPhotoWidthVw;

    // Act
    const result = addPhoto(
      nextColumnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.positionLeftVw).toBe(spacingSidesVw);
    expect(result.positionTopVw).toBe(4);
    expect(result.columnIndex).toBe(0);
    expect(result.nextColumnTopVws).toEqual([
      4 + expectedPhotoHeightVw + spacingBetweenVw,
      4,
      4,
      4,
    ]);
  });

  test("At the top of the page, the 2nd photo is added to column 1.", () => {
    // Arrange
    const nextColumnTopVws = [18.875, 4, 4, 4];

    const photo = {
      width: 240,
      height: 480,
    } as Photo;

    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 2 * expectedPhotoWidthVw;

    // Act
    const result = addPhoto(
      nextColumnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.positionLeftVw).toBe(
      spacingSidesVw + expectedPhotoWidthVw + spacingBetweenVw
    );
    expect(result.positionTopVw).toBe(4);
    expect(result.columnIndex).toBe(1);
    expect(result.nextColumnTopVws).toEqual([
      18.875,
      4 + expectedPhotoHeightVw + spacingBetweenVw,
      4,
      4,
    ]);
  });
});
